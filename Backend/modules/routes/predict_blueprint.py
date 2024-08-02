from flask import Blueprint, request, jsonify
from modules.handlers.predict_handler import make_predictions

predict_blueprint = Blueprint('predict', __name__)

@predict_blueprint.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.json

    # Make predictions using the handler
    response = make_predictions(data)

    # Return the response as JSON
    return jsonify(response)
