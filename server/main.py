from flask import Flask
from dotenv import load_dotenv
from routes.llm import llm_bp

load_dotenv()

app = Flask(__name__)

app.register_blueprint(llm_bp, url_prefix='/llm')

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()