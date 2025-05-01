from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import BangalorePricePrediction as tm

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    try:
        locations = tm.get_location_names()
        return jsonify({'locations': locations})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get_area_names', methods=['GET'])
def get_area_names():
    try:
        areas = tm.get_area_values()
        return jsonify({'area': areas})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/get_availability_names', methods=['GET'])
def get_availability_names():
    try:
        availability = tm.get_availability_values()
        return jsonify({'availability': availability})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get form data
        data = request.form
        sqft = float(data.get('sqft'))
        bhk = int(data.get('bhk'))
        bath = int(data.get('bath'))
        loc = data.get('loc')
        area = data.get('area')
        avail = data.get('avail')

        # Validate inputs
        if None in [sqft, bhk, bath, loc, area, avail]:
            return jsonify({'error': 'All fields are required'}), 400

        # Make prediction
        prediction = tm.predict_house_price(loc, area, avail, sqft, bhk, bath)
        prediction = round(float(prediction), 2)

        return jsonify({
            'prediction_text': f"The estimated price is ₹{prediction} lakhs",
            'prediction_value': prediction
        })

    except ValueError as e:
        return jsonify({'error': f'Invalid input: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500

if __name__ == "__main__":
    tm.load_saved_attributes()
    app.run(debug=True)