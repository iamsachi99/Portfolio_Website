from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://sachisenanayake1:<password>@portfoliocontact.dumkhzw.mongodb.net/?appName=portfoliocontact"
mongo = PyMongo(app)
CORS(app)

@app.route('/api/contact', methods=['POST'])
def save_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if name and email and message:
        contact = {
            'name': name,
            'email': email,
            'message': message
        }
        mongo.db.contacts.insert_one(contact)
        return jsonify({'msg': 'Message received'}), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
