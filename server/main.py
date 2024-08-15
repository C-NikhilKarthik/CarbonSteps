from flask import Flask, jsonify
from dotenv import load_dotenv
from routes.llm import llm_bp
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

app.register_blueprint(llm_bp, url_prefix='/llm')

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
