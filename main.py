import os, hashlib, secrets, httpx,dotenv
from flask import Flask, redirect, url_for, session, jsonify, render_template
import flask_cors
from datetime import datetime, timedelta, UTC
from authlib.integrations.flask_client import OAuth
import db

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")

app = Flask(__name__)
flask_cors.CORS(app)

app.secret_key = os.getenv("FLASK_SECRET_KEY")

@app.route('/')
def serve_index():
    # This will return the index.html file to the browser
    # Make sure your Canvas file is saved as 'index.html' in the same folder as this script
    return render_template('index.html')

oauth = OAuth(app)

google = oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={
        "scope": "openid email profile"
    }
)

@app.route("/login")
def login():
    redirect_uri = url_for("authorize", _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route("/authorize")
def authorize():
    token = google.authorize_access_token()

    # Fetch user info from Google
    user_info = token.get("userinfo")

    if user_info:
        user_data = {
            "email": user_info.get("email"),
            "name": user_info.get("name"),
            "openid": user_info.get("sub")  # Google's OpenID unique user ID
        }

        # Optional: store in session
        session["user"] = user_data
        ##############################################################
        db.add_user(email_id=user_data.get("email"),
                    name=user_data.get("name"),
                    google_oauth_openid=user_data.get("openid"))
        ##############################################################
        return jsonify(user_data)

    return jsonify({"error": "Failed to fetch user info"}), 400

@app.route("/user/<openid>")
def get_user(openid):

    user_data = db.check_user(openid)
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True, port=8000)