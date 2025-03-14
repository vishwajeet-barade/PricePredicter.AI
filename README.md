# Price Predicter.AI
🏡 Real Estate Price Predictor

📌 Overview



Real Estate Price Predictor is a web-based application that estimates property prices based on location, number of bedrooms, bathrooms, area (sqft), and BHK 

configuration. It uses a Machine Learning model (trained with historical real estate data) to provide accurate price predictions.

This project is built using Flask (backend), HTML/CSS/JavaScript (frontend), and Jupyter Notebook (for model training).



#🛠️ Features



✅ Predicts real estate prices based on user inputs

✅ Machine Learning model trained with property data

✅ Interactive web application using HTML, CSS, and JavaScript

✅ Flask-based backend to handle predictions

✅ CORS-enabled API for seamless frontend-backend communication

✅ JSON-based responses for integration with other applications


#📡 Machine Learning Model



The model is built using Python, NumPy, and Scikit-Learn. It takes features like:

Location , BHK (1BHK, 2BHK, etc.) , Number of Bathrooms , Total Area (sqft) ,Other property attributes

It predicts real estate prices based on patterns learned from historical sales data.



#💻 Installation & Setup

🔹 Prerequisites

Make sure you have:

Python 3.8+ ,Flask ,Jupyter Notebook ,HTML, CSS, JavaScript (for frontend)


🔹 Steps to Run the Project

1] git clone https://github.com/vishwajeet-barade/Real-Estate-Price-Predictor.git

cd Real-Estate-Price-Predictor

2] pip install -r requirements.txt

3️⃣ Run the Flask Backend

cd server

python server.py

4️⃣ Run the Web Application

cd client

python -m http.server 5000

![image](https://github.com/user-attachments/assets/672ef78e-41c2-4d3b-abba-a227b35469f3)





