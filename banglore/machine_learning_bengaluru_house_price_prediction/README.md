
# Bengaluru House Price Predictor

![App Screenshot](https://github.com/bharathngowda/machine_learning_bengaluru_house_price_prediction/blob/main/Bengaluru_buildings_1200-min.jpg)

### Table of Contents

1. [Problem Statement](#Problem-Statement)
2. [Data Pre-Processing](#Data-Pre-Processing)
3. [Exploratory Data Analysis](#Exploratory-Data-Analysis)
4. [Feature Engineering](#Feature-Engineering)
5. [Model Training](#Model-Building)
6. [Model Selection](#Model-Selection)
7. [Model Evaluation](#Model-Evaluation)
8. [Dependencies](#Dependencies)
9. [Installation](#Installation)

### Problem Statement

hat are the things that a potential home buyer considers before purchasing a house? The location, the size of the property, vicinity to offices, schools, parks, restaurants, hospitals or the stereotypical white picket fence? What about the most important factor — the price?

Now with the lingering impact of demonetization, the enforcement of the Real Estate (Regulation and Development) Act (RERA), and the lack of trust in property developers in the city, housing units sold across India in 2017 dropped by 7 percent. In fact, the property prices in Bengaluru fell by almost 5 percent in the second half of 2017, said a study published by property consultancy Knight Frank.
For example, for a potential homeowner, over 9,000 apartment projects and flats for sale are available in the range of ₹42-52 lakh, followed by over 7,100 apartments that are in the ₹52-62 lakh budget segment, says a report by property website Makaan. According to the study, there are over 5,000 projects in the ₹15-25 lakh budget segment followed by those in the ₹34-43 lakh budget category.

Buying a home, especially in a city like Bengaluru, is a tricky choice. While the major factors are usually the same for all metros, there are others to be considered for the Silicon Valley of India. With its help millennial crowd, vibrant culture, great climate and a slew of job opportunities, it is difficult to ascertain the price of a house in Bengaluru.

**Quick Start:** [View](https://github.com/bharathngowda/machine_learning_bengaluru_house_price_prediction/blob/main/Bengaluru%20House%20Price%20Prediction.ipynb) a static version of the notebook in the comfort of your own web browser.

### Data Pre-Processing

- Loaded the train and test data
- Split the dataset into train and test as there was no separate test set.
- Checked for null values
- Null value imputation
- Outlier detection and removal using std and mean


### Exploratory Data Analysis

- Plots to understand the area type, baths, size, balcony of the houses and how these features affected the price of the houses.

### Feature Engineering

New features created are - 
* Converted areatype from categorial to numerical
* Converted he total sqft to one unit i.e., from sqmts to sqft, acres t sqft, yards to sqft etc 
* Made corrections to spellings in location
* Converetd size from categorical to numerical i.e., 2bhk to 2, 1bhk to 1 etc

### Model Training

Models used for the training the dataset are - 

- [Linear Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)
- [Lasso](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)
- [Ridge](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)
- [DicesionTree Regression](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html)
- [Random Forest Regressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

### Model Selection

I have used [r2 score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html) as my scorer and used [k-fold cross-validation](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_score.html)
to select the model with highest **'r2 score'**.

### Model Evaluation

I fit the final model on the train data and predicted the house price for the test data and obtained the below result-

| Metric    | Score    |
| :-------- | :------- |
| MAE	|	16.652475
| MSE	|   889.078557
| RMSE	|	29.817420
| R^2	|	0.910654

### Dependencies
* [NumPy](http://www.numpy.org/)
* [IPython](http://ipython.org/)
* [Pandas](http://pandas.pydata.org/)
* [SciKit-Learn](http://scikit-learn.org/stable/)
* [SciPy](http://www.scipy.org/)
* [Matplotlib](http://matplotlib.org/)
* [Seaborn](https://seaborn.pydata.org/)

### Installation

To run this notebook interactively:

1. Download this repository in a zip file by clicking on this [link](https://github.com/bharathngowda/machine_learning_bengaluru_house_price_prediction/archive/refs/heads/main.zip) or execute this from the terminal:
`git clone https://github.com/bharathngowda/machine_learning_bengaluru_house_price_prediction.git`

2. Install [virtualenv](http://virtualenv.readthedocs.org/en/latest/installation.html).
3. Navigate to the directory where you unzipped or cloned the repo and create a virtual environment with `virtualenv env`.
4. Activate the environment with `source env/bin/activate`
5. Install the required dependencies with `pip install -r requirements.txt`.
6. Execute `ipython notebook` from the command line or terminal.
7. Click on `Bengaluru House Price Prediction.ipynb` on the IPython Notebook dasboard and enjoy!
8. When you're done deactivate the virtual environment with `deactivate`.
