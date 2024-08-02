from flask import Blueprint, request, jsonify
from models import db, Claim
from datetime import datetime

claims_blueprint = Blueprint('claims', __name__)



@claims_blueprint.route('/api/claims', methods=['POST'])
def create_claim():
    """Create a new claim."""
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Convert dates from string to datetime
        if 'policy_bind_date' in data:
            data['policy_bind_date'] = datetime.strptime(data['policy_bind_date'], '%Y-%m-%d')
        if 'incident_date' in data:
            data['incident_date'] = datetime.strptime(data['incident_date'], '%Y-%m-%d')

        # Create a new Claim object
        claim = Claim(**data)

        # Add to the database
        db.session.add(claim)
        db.session.commit()

        return jsonify({"message": "Claim created successfully", "claim_id": claim.id}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500



@claims_blueprint.route('/api/claims', methods=['GET'])
def get_claims():
    """Retrieve all claims."""
    try:
        claims = Claim.query.all()
        claims_list = [claim.to_dict() for claim in claims]
        return jsonify(claims_list), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
