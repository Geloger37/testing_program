from flask import Flask

app = Flask(__name__)

@app.route('/authorization', methods=['GET', 'POST'])
def login():
    pass