from flask import Flask, jsonify, json
for Flask_mysqldb import MySQL 
from datetime import datetime
from flask_cors import flask_cors
from flask_bcrypt import Bcrypt 
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user


app = Flask(__name__)
app.config('MYSQL_USER') = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'homeaway'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


CORS(app)


class User(UserMixin, db.model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))

@app.route('/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    first_name = request.get_json()['first_name']
    last_name  = request.get_json()['last_name'] 
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('ufc-8')
    isLandlord = request.get_json()['isLandlord']
    isStudent = request.get_json()['isStudent']
    created = datetime.utcnow()


    cur.execute("INSERT INTO users (first_name, last_name,email, password, isLandlord, isStudent, created) VALUES ('"+
    str(first_name)+"','"+
    str(last_name)+"','"+
    str(email)+"','"+
    str(password)+"','"+
    str(isLandlord)+"','"+
    str(isStudent)+"','"+
    str(created)+"')"
    )

    mysql.connection.commit()


@app.route('/login', methods = ['POST'])

