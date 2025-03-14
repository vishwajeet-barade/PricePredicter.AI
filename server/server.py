from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load model and column data
with open("D:\Project\ML\Real_Estate\model\columns.json", "r") as f:
    data_columns = json.load(f)["data_columns"]

with open("D:\Project\ML\Real_Estate\model\home_price_model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/get_locations", methods=["GET"])
def get_locations():
    locations = data_columns[3:]  # Exclude the first column which is usually the target
    return jsonify({"locations": locations})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        loc_index = data_columns.index(data["location"]) if data["location"] in data_columns else -1

        features = np.zeros(len(data_columns))
        features[0] = data["total_sqft"]
        features[1] = data["bath"]
        features[2] = data["bhk"]
        if loc_index >= 0:
            features[loc_index] = 1  # One-hot encoding

        predicted_price = model.predict([features])[0]
        return jsonify({"predicted_price": round(predicted_price, 2)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
