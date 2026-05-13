import os, hashlib, secrets, httpx,dotenv
from flask import Flask, redirect, url_for, session, jsonify, render_template,request
import flask_cors
from datetime import datetime, timedelta, UTC
from authlib.integrations.flask_client import OAuth
import db
from ai.ai.chatbot import ask_llm

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


@app.route("/states", methods=["GET"])
def states():
    return jsonify({
        "states": chalan.get_states()
    })


@app.route("/vehicle-types", methods=["GET"])
def vehicle_types():
    return jsonify({
        "vehicle_types": chalan.get_vehicle_types()
    })


@app.route("/violations", methods=["GET"])
def violations():
    return jsonify({
        "violations": chalan.get_violations()
    })

@app.route("/calculate-fine", methods=["POST"])
def calculate_fine():

    data = request.get_json()

    # Validate request body
    required_fields = [
        "state",
        "vehicle_type",
        "violation",
        "first_offence"
    ]

    for field in required_fields:
        if field not in data:
            return jsonify({
                "error": f"Missing field: {field}"
            }), 400

    fine = chalan.calculate_fine(
        state=data["state"],
        vehicle_type=data["vehicle_type"],
        violation=data["violation"],
        first_offence=data["first_offence"]
    )

    # Rule not found
    if fine is None:
        return jsonify({
            "error": "No matching challan rule found"
        }), 404

    return jsonify({
        "fine": fine
    })

@app.route("/ask-llm", methods=["POST"])
def ask_llm_api():
    try:
        # Get JSON data from request
        data = request.get_json()

        # Required fields
        user_query = data.get("user_query")
        state_code = data.get("state_code")

        # Optional fields
        violation_id = data.get("violation_id")
        vehicle_type = data.get("vehicle_type")

        # Validate required fields
        if not user_query or not state_code:
            return jsonify({
                "error": "user_query and state_code are required"
            }), 400

        # Call chatbot function
        response = ask_llm(
            user_query=user_query,
            state_code=state_code,
            violation_id=violation_id,
            vehicle_type=vehicle_type
        )

        return jsonify(response), 200

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)