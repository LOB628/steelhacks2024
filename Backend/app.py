#API Stuff
from flask import Flask, request
from flask_cors import CORS, cross_origin
#Utils
from dotenv import load_dotenv
#Gemini Functions
from Gemini.Chat import LiveChat
from Gemini.Gemini import Gemini as Gemi

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/api": {"origins":"*"}})

chatObj = LiveChat

@app.route('/api/v1/gemini', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def Gemini():
    prompt = request.json['Prompt']
    #print(prompt['content'])
    print(Gemi(prompt['content']))
    return 'Success', 200