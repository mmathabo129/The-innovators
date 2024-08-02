from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Claim(db.Model):
    __tablename__ = 'claims'
    claim_id = db.Column(db.Integer, primary_key=True)
    feature_data = db.Column(db.Text, nullable=False)
    model_prediction = db.Column(db.Integer, nullable=False)
    confidence_score = db.Column(db.Float, nullable=False)
    explanation = db.Column(db.Text, nullable=False)
    approval_status = db.Column(db.String(50), nullable=False, default='pending')


