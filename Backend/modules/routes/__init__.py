import os
from config import Config
from models import db
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    # Print statements for debugging
    print("Current Working Directory:", os.getcwd())
    print("Template Folder:", app.template_folder)

    # Import and register blueprints
    from .home_blueprint import home_blueprint
    app.register_blueprint(home_blueprint)

    from .predict_blueprint import predict_blueprint
    app.register_blueprint(predict_blueprint)

    # Import and register the claims blueprint
    from .claims import claims_blueprint
    app.register_blueprint(claims_blueprint)

    return app

