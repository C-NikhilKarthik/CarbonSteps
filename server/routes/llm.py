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
    prompt1 = data.get('prompt1', '')

    response1= model.generate_content(prompt1, safety_settings={
        'HATE': 'BLOCK_NONE',
        'HARASSMENT': 'BLOCK_NONE',
        'SEXUAL': 'BLOCK_NONE',
        'DANGEROUS': 'BLOCK_NONE'
    })

    prompt2 = data.get('prompt2', '')

    response2= model.generate_content(prompt2, safety_settings={
        'HATE': 'BLOCK_NONE',
        'HARASSMENT': 'BLOCK_NONE',
        'SEXUAL': 'BLOCK_NONE',
        'DANGEROUS': 'BLOCK_NONE'
    })

    result1 = response1.text.strip()
    result2 = response2.text.strip()
    return jsonify({'result1': result1, 'result2': result2})
