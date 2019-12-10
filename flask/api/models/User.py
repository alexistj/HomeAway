from uuid import uuid4



from api.core import Mixin
from .base import db as DB

class User(Mixin, DB.Model):
    """User model."""
    __tablename__ = "users"

    id = DB.Column(
        DB.Integer,
        nullable=False,
        primary_key=True
    )
    uuid = DB.Column(
        DB.String(32),
        unique=True,
        nullable=False,
        default=str(uuid4())
    )
    full_name = DB.Column(DB.String(255), nullable=False)
    user_name = DB.Column(DB.String(255), nullable=False)
    password = DB.Column(DB.String(255), nullable=False)
    admin = DB.Column(DB.Boolean, default=False, nullable=False)


    @staticmethod
    def try_login(username, password):
        return True
    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id

    def __init__(self, user_name: str, password: str):
        self.user_name = user_name
        self.password  = password
