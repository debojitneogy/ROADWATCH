import sqlite3

DB_NAME = "database.db"


def create_users_table():

    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    # Check if USERS table already exists
    cursor.execute("""
        SELECT name
        FROM sqlite_master
        WHERE type='table' AND name='USERS'
    """)

    table_exists = cursor.fetchone()

    if table_exists:
        print("USERS table already exists.")
    else:
        cursor.execute("""
            CREATE TABLE USERS (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email_id TEXT UNIQUE NOT NULL,
                google_oauth_openid TEXT UNIQUE NOT NULL,
                name TEXT NOT NULL
            )
        """)
        conn.commit()
        print("USERS table created successfully.")

    conn.close()

def add_user(email_id, google_oauth_openid, name):

    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    try:
        cursor.execute("""
            INSERT INTO USERS (email_id, google_oauth_openid, name)
            VALUES (?, ?, ?)
        """, (email_id, google_oauth_openid, name))

        conn.commit()
        print("User added successfully.")

    except sqlite3.IntegrityError as e:
        print("Error:", e)

    finally:
        conn.close()

def show_all_users():
    """
    Displays all users from the USERS table.
    """

    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, email_id, google_oauth_openid, name
        FROM USERS
    """)

    users = cursor.fetchall()

    if users:
        print("\n--- USERS TABLE ---")

        for user in users:
            print(f"""
ID: {user[0]}
Email: {user[1]}
OpenID: {user[2]}
Name: {user[3]}
--------------------
""")
    else:
        print("No users found.")

    conn.close()

##########################################################################
create_users_table()

if __name__ == "__main__":
    show_all_users()