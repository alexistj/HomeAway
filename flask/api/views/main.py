import json
import hashlib

from flask import Blueprint, request

from flask_login import current_user, login_user, logout_user, login_required


from api.models import db,  User
from api.core import create_response, serialize_list, logger
from flask import render_template

from sqlalchemy import inspect
from sqlalchemy.sql import exists

main = Blueprint("main", __name__)  # initialize blueprint
auth = Blueprint('auth', __name__)

from flask_login import current_user, login_user, logout_user, login_required, LoginManager
from flask import request, Blueprint, g, flash, render_template, redirect, url_for, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired
from werkzeug.security import generate_password_hash, check_password_hash


class LoginForm(FlaskForm):
    username = StringField('Username', [InputRequired()])
    password = PasswordField('Password', [InputRequired()])


login_manager = LoginManager()



main = Blueprint("main", __name__)  # initialize blueprint

Spreadsheet = '1GEZbERl9u1xTpQSgndgFZz0yJ3ahoxID7kH_fFXGrWc'
sheet = "Sheet1"

@login_manager.user_loader
def load_user(id):
    return User.query.get(id)

@login_manager.unauthorized_handler
def unauthorized_callback():
    return redirect(url_for('main.login'))

@main.before_request
def get_current_user():
    g.user = current_user


#
# # function that is called when you visit /
# @main.route("/")
# def index():
#     # you are now in the current application context with the main.route decorator
#     # access the logger with the logger from api.core and uses the standard logging module
#     # try using ipdb here :) you can inject yourself
#     logger.info("index called")
#     return render_template("html/index.html", form="")
    # return "<h1>Hello World!</h1>"






# function that is called when you visit /settings
@main.route("/settings")
def settings():
    logger.info("settings called")
    return render_template("html/settings.html", link="",user_email=current_user.user_name, curr = current_user, submission_successful=False)




#allow user to change email
@main.route("/edit_email", methods=["POST"])
@login_required
def edit_email():
    data = request.form
    new_email = data["email"]
    current_user.user_name = new_email
    user = User.query.filter_by(user_name=new_email).first()
    user.user_name = new_email
    db.session.commit()
    logger.info("new email confirmed")

# POST request for adding a new user
@main.route("/register_new_user", methods=["POST"])
@login_required
def register_new_user():
    data = request.form

    logger.info("Data recieved: %s", data)
    if "name" not in data:
        msg = "No name provided for person."
        logger.info(msg)
        return create_response(status=422, message=msg)
    if "email" not in data:
        msg = "No email provided for person."
        logger.info(msg)
        return create_response(status=422, message=msg)
    if "password" not in data:
        msg = "No password provided for person."
        logger.info(msg)
        return create_response(status=422, message=msg)

    def str2bool(v):
        return v.lower() in ("yes", "true", "t", "1")
    # create SQLAlchemy Objects
    new_person = User(user_name=data["email"],password=generate_password_hash(data["password"], method= 'sha256'))
    new_person.uuid = data["email"]
    new_person.full_name = data["name"]
    new_person.admin=str2bool(data["admin"])

    # commit it to database
    db.session.add_all([new_person])
    db.session.commit()

    return render_template("html/settings.html", link="",user_email=current_user.user_name, curr = current_user,submission_successful=True )



#route to create new admin account
@main.route("/j8GdPruOI3", methods=["GET"])
def init_admin():
    # create SQLAlchemy Objects
    def str2bool(v):
        return v.lower() in ("yes", "true", "t", "1")
    new_person = User(user_name="admin",password=generate_password_hash("admin12", method= 'sha256'))
    new_person.uuid = "admin"
    new_person.full_name = "admin"
    new_person.admin=str2bool("true")
    form = LoginForm(request.form)

    # commit it to database
    db.session.add_all([new_person])
    db.session.commit()
    return render_template("html/login.html", form=form,message ="Please Login")


#route to login user
@main.route('/', methods=['GET', 'POST'])
@main.route('/login', methods=['GET', 'POST'])
def login():

    if current_user.is_authenticated:
        flash('You are already logged in', 'info')
        return redirect(url_for('main.events'))

    form = LoginForm(request.form)

    if request.method == 'POST' and form.validate():
        user_name = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(user_name=user_name).first()
        #Check if user is in db
        if not user or not check_password_hash(user.password, password):

            # first_name = username
            # last_name =  password
            # user = User(username=username, password=password)
            # db.session.add(user)
            # db.session.commit()
            # flash()
            # return render_template('html/login.html', message="Failure")
            return render_template('html/login.html', form=form, message="Login Failed")

        login_user(user)
        flash('You have successfully logged in.', 'success')
        return redirect(url_for('main.events'))

    if form.errors:
        flash(form.errors, 'danger')
    return render_template('html/login.html', form=form, message ="Please Login")

#logout user 
@main.route('/logout')
@login_required
def logout():
    logout_user()
    form =""
    form = LoginForm(request.form)
    return render_template('html/login.html', form=form, message ="Successfully logged out")
