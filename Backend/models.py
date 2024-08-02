# models.py

from flask_sqlalchemy import SQLAlchemy

# Initialize SQLAlchemy
db = SQLAlchemy()

class Claim(db.Model):
    __tablename__ = 'claims'

    id = db.Column(db.Integer, primary_key=True)
    months_as_customer = db.Column(db.Integer, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    policy_number = db.Column(db.Integer, nullable=False, unique=True)
    policy_bind_date = db.Column(db.Date, nullable=False)
    policy_state = db.Column(db.String(2), nullable=False)
    policy_csl = db.Column(db.String(10), nullable=False)
    policy_deductable = db.Column(db.Integer, nullable=False)
    policy_annual_premium = db.Column(db.Float, nullable=False)
    umbrella_limit = db.Column(db.Integer, nullable=False)
    insured_zip = db.Column(db.Integer, nullable=False)
    insured_sex = db.Column(db.String(10), nullable=False)
    insured_education_level = db.Column(db.String(50), nullable=False)
    insured_occupation = db.Column(db.String(50), nullable=False)
    insured_hobbies = db.Column(db.String(50), nullable=False)
    insured_relationship = db.Column(db.String(20), nullable=False)
    capital_gains = db.Column(db.Integer, nullable=False)  # Update hyphen to underscore
    capital_loss = db.Column(db.Integer, nullable=False)   # Update hyphen to underscore
    incident_date = db.Column(db.Date, nullable=False)
    incident_type = db.Column(db.String(50), nullable=False)
    collision_type = db.Column(db.String(50), nullable=False)
    incident_severity = db.Column(db.String(50), nullable=False)
    authorities_contacted = db.Column(db.String(50), nullable=False)
    incident_state = db.Column(db.String(2), nullable=False)
    incident_city = db.Column(db.String(50), nullable=False)
    incident_location = db.Column(db.String(100), nullable=False)
    incident_hour_of_the_day = db.Column(db.Integer, nullable=False)
    number_of_vehicles_involved = db.Column(db.Integer, nullable=False)
    property_damage = db.Column(db.String(3), nullable=False)
    bodily_injuries = db.Column(db.Integer, nullable=False)
    witnesses = db.Column(db.Integer, nullable=False)
    police_report_available = db.Column(db.String(3), nullable=False)
    total_claim_amount = db.Column(db.Float, nullable=False)
    injury_claim = db.Column(db.Float, nullable=False)
    property_claim = db.Column(db.Float, nullable=False)
    vehicle_claim = db.Column(db.Float, nullable=False)
    auto_make = db.Column(db.String(50), nullable=False)
    auto_model = db.Column(db.String(50), nullable=False)
    auto_year = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        """Convert object to dictionary"""
        return {
            "id": self.id,
            "months_as_customer": self.months_as_customer,
            "age": self.age,
            "policy_number": self.policy_number,
            "policy_bind_date": self.policy_bind_date.strftime('%Y-%m-%d'),
            "policy_state": self.policy_state,
            "policy_csl": self.policy_csl,
            "policy_deductable": self.policy_deductable,
            "policy_annual_premium": self.policy_annual_premium,
            "umbrella_limit": self.umbrella_limit,
            "insured_zip": self.insured_zip,
            "insured_sex": self.insured_sex,
            "insured_education_level": self.insured_education_level,
            "insured_occupation": self.insured_occupation,
            "insured_hobbies": self.insured_hobbies,
            "insured_relationship": self.insured_relationship,
            "capital_gains": self.capital_gains,  # Update hyphen to underscore
            "capital_loss": self.capital_loss,    # Update hyphen to underscore
            "incident_date": self.incident_date.strftime('%Y-%m-%d'),
            "incident_type": self.incident_type,
            "collision_type": self.collision_type,
            "incident_severity": self.incident_severity,
            "authorities_contacted": self.authorities_contacted,
            "incident_state": self.incident_state,
            "incident_city": self.incident_city,
            "incident_location": self.incident_location,
            "incident_hour_of_the_day": self.incident_hour_of_the_day,
            "number_of_vehicles_involved": self.number_of_vehicles_involved,
            "property_damage": self.property_damage,
            "bodily_injuries": self.bodily_injuries,
            "witnesses": self.witnesses,
            "police_report_available": self.police_report_available,
            "total_claim_amount": self.total_claim_amount,
            "injury_claim": self.injury_claim,
            "property_claim": self.property_claim,
            "vehicle_claim": self.vehicle_claim,
            "auto_make": self.auto_make,
            "auto_model": self.auto_model,
            "auto_year": self.auto_year
        }
