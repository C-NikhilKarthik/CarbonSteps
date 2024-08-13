from flask import Blueprint, request, jsonify

user_data_bp = Blueprint('user_data', __name__)

@user_data_bp.route('/fetch_user_details', methods=['POST'])
def fetch_user_details():
    data = request.get_json()
    home = data['home']
    work = data['work']
    transportation = data['transportation']
    timing = data['timing']
    
    return jsonify({'home': home, 'work': work, 'transportation': transportation, 'timing': timing})

