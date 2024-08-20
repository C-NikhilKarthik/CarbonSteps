# CarbonSteps

## Overview

CarbonSteps is a web application designed to track and reduce carbon emissions based on transportation choices. The platform provides accurate predictions of emissions and offers actionable suggestions to help users make environmentally conscious decisions.

## Tech Stack

Frontend: Next.js, Tailwind CSS 

Backend: Flask, Python

AI Integration: Gemini AI

## Project Structure
The project is organized into two main folders:

client: Contains the frontend application built with Next.js.
server: Contains the backend application built with Flask and Python.

## Setup Instructions

Follow these steps to clone the repository, set up the Python environment, and run the chess engine:

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/Aayush-Kr-13/Chess-Engine-Python.git](https://github.com/C-NikhilKarthik/CarbonSteps.git
   
2. **Setting Up the Frontend**

   Navigate to the client directory:

   ```bash
    cd CarbonSteps/client
   ```
   Install the required npm packages:
   ```bash
    npm install
   ```
   Run the frontend application:
   ```bash
   npm run dev
   ```
   
4. **Setting Up the Backend**

   Open a new terminal window and navigate to the server directory:
   ```bash
   cd CarbonSteps/server
   ```
   Install the required Python packages:
   ```bash
    pip install -r requirements.txt
    ```
    Run the backend server:
    ```bash
    python3 main.py
    ```

**Notes**

Ensure that you have created a .env file in the server directory with your API key for the Gemini AI integration.
If you encounter any errors with the server, consider creating a virtual environment to manage dependencies and avoid conflicts.

To create and activate a virtual environment, use the following commands:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

