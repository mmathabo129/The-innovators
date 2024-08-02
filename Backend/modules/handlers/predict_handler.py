import pandas as pd
import joblib

# Load the models and the scaler
loaded_logreg = joblib.load('algorithms/best_logistic_regression.pkl')
loaded_tree = joblib.load('algorithms/best_decision_tree.pkl')
loaded_forest = joblib.load('algorithms/best_random_forest.pkl')
loaded_xgb = joblib.load('algorithms/best_xgboost.pkl')
scaler = joblib.load('algorithms/scaler.pkl')

# Load the training feature columns
X_train_columns = joblib.load('algorithms/X_train_columns.pkl')  # Load the list of training columns

# Define a function to prepare and scale new data
def prepare_new_data(new_data, min_policy_bind_date, min_incident_date, X_train_columns):
    # Fill missing values
    new_data.fillna(0, inplace=True)


    # Convert date columns to datetime
    if 'policy_bind_date' in new_data.columns:
        new_data['policy_bind_date'] = pd.to_datetime(new_data['policy_bind_date'])
    if 'incident_date' in new_data.columns:
        new_data['incident_date'] = pd.to_datetime(new_data['incident_date'])

    # Convert date columns to numeric days since minimum date
    if 'policy_bind_date' in new_data.columns:
        new_data['days_since_policy_bind'] = (new_data['policy_bind_date'] - min_policy_bind_date).dt.days
        new_data.drop('policy_bind_date', axis=1, inplace=True)

    if 'incident_date' in new_data.columns:
        new_data['days_since_incident'] = (new_data['incident_date'] - min_incident_date).dt.days
        new_data.drop('incident_date', axis=1, inplace=True)

    # Encode categorical columns using one-hot encoding
    new_data = pd.get_dummies(new_data)

    # Add missing columns that were present in the training data
    missing_cols = set(X_train_columns) - set(new_data.columns)
    for col in missing_cols:
        new_data[col] = 0

    # Reorder the new data to match the training data column order
    new_data = new_data[X_train_columns]

    # Scale the features
    new_data_scaled = scaler.transform(new_data)

    return new_data_scaled

def make_predictions(data):
    # Convert JSON data to a DataFrame
    new_data = pd.DataFrame([data])

    # Define the reference dates from your existing dataset
    min_policy_bind_date = pd.to_datetime('1990-01-01')  # Example date
    min_incident_date = pd.to_datetime('1990-01-01')     # Example date

    # Prepare and scale the new data
    new_data_scaled = prepare_new_data(new_data, min_policy_bind_date, min_incident_date, X_train_columns)

    # Make predictions with each loaded model
    logreg_prediction = loaded_logreg.predict(new_data_scaled)
    tree_prediction = loaded_tree.predict(new_data_scaled)
    forest_prediction = loaded_forest.predict(new_data_scaled)
    xgb_prediction = loaded_xgb.predict(new_data_scaled)

    # Create a response dictionary
    response = {
        'Logistic Regression Prediction': 'Fraudulent' if logreg_prediction[0] == 1 else 'Not Fraudulent',
        'Decision Tree Prediction': 'Fraudulent' if tree_prediction[0] == 1 else 'Not Fraudulent',
        'Random Forest Prediction': 'Fraudulent' if forest_prediction[0] == 1 else 'Not Fraudulent',
        'XGBoost Prediction': 'Fraudulent' if xgb_prediction[0] == 1 else 'Not Fraudulent'
    }

    return response
