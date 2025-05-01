**Bangalore Housing Price Prediction**

     A machine learning project for predicting real estate prices in Bangalore, India. This application uses structured data and regression models to estimate housing prices based on features such as location, square footage, number of bedrooms (BHK), and bathrooms. The project is deployed via a Flask-based web interface to provide an interactive and user-friendly experience.*

**📌 Project Objective**

The objective of this project is to build a reliable and interpretable housing price prediction system for Bangalore using supervised learning. By analyzing historical property data, the model aims to:
•	Provide accurate price estimates for residential properties.
•	Assist buyers, sellers, and real estate agents in making informed 
    decisions.
•	Demonstrate end-to-end deployment of a machine learning model in a
    real-world scenario.

**📁 Dataset Overview**

The dataset used for this project was sourced from Kaggle. It contains real estate listings with the following key attributes:
•	Location: Neighborhood or area within Bangalore.
•	Total Square Footage: Total livable area of the property.
•	Size: Indicates the number of bedrooms.
•	Bath: Number of bathrooms.
•	Price: Target variable (in lakhs of INR).

**🔍 Data Preprocessing & Feature Engineering**

Significant preprocessing steps were performed to clean and prepare the data:
•	Missing value treatment: Handled missing and inconsistent data 
    entries.
•	Feature extraction: Derived BHK from 'size', removed outliers using 
    domain-specific rules (e.g., price per square foot).
•	Location simplification: Consolidated rare locations under an 
    "other" category.
•	One-hot encoding: Transformed categorical features for use in 
    regression models.

**Web Application**

A Flask-based web application was developed for end-user interaction:
•	Input fields: Users provide property details (e.g., area, location, 
    BHK, bathrooms).
•	Prediction output: Returns an estimated price in INR lakhs.
•	Frontend: Built with HTML/CSS and integrated with the Flask backend

**🛠️ Technologies Used**

*Domain            ----> Tools & Libraries
Programming       ---->	 Python 3.x
Data Manipulation ---->	 Pandas, NumPy
Visualization     ---->	 Matplotlib, Seaborn
Machine Learning  ---->	 Scikit-learn
Web Framework     ---->	 Flask*


