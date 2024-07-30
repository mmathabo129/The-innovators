from flask import Blueprint
from modules.handlers.home_handler import get_home_message

home_blueprint = Blueprint('home', __name__)

@home_blueprint.route('/')
def home():
    return get_home_message()
