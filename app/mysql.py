from flask import Flask, jsonify, json
for Flask_mysqldb import MySQL 
from datetime import datetime
from flask_cors import flask_cors
from flask_bcrypt import Bcrypt 
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
p)

db = SQLAlchemy(app)
login_manager = SQLAlchemy(app)
login_manager.init_app(app)
login_manager.login_view = 'login'


class User(UserMixin, db.model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))

@app.route('/register', methods=['POST'])
def register():
    cur