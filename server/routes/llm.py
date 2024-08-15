from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
import os
import google.generativeai as genai
from flask_cors import CORS  # Import CORS

load_dotenv()
llm_bp = Blueprint('llm', __name__)      
CORS(llm_bp)  # Apply CORS to the blueprint

API_KEY = os.getenv('API_KEY')
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-pro')

@llm_bp.route('/fetch_result', methods=['POST'])
def fetch_result():
    data = request.get_json()
    prompt = data.get('prompt', '')

    response = model.generate_content(prompt, safety_settings={
        'HATE': 'BLOCK_NONE',
        'HARASSMENT': 'BLOCK_NONE',
        'SEXUAL': 'BLOCK_NONE',
        'DANGEROUS': 'BLOCK_NONE'
    })

    result = response.text.strip()
    return jsonify({'result': result})
