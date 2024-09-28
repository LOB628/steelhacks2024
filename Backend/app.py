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

@app.route('/api/gemini', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def Gemini():
    prompt = request.json['Prompt']
    #print(prompt['content'])
    try:
        res = Gemi(prompt['content'])
        return {'Code':200, 'Response': res}
    except:
        print("Something went wrong")
        return {'Code':500, 'Response': 'Something went wrong'}


@app.route('/api/initchat', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def init_chat():

    #! Only call on initialization
    #! Use /api/chat

    chatObj.history = []
    
    chatHistory = request.json['lastMsg']
    if (chatHistory == ""):
        return {'Code': 201, 'Response': 'Success'}
    chatObj.history.append({'role':'model', 'parts':chatHistory})
    return {'Code': 200, 'Response': chatObj.history, 'Input': chatHistory}


@app.route('/api/v1/chat', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def chat():
    message = request.json['message']
    #*assumes message comes from a formdata() and not a request.

    try:
        response = chatObj.send_message(message)
        return {'Code': 200, 'Response': response}
    except():
        return {'Code': 500, 'Response': "An error occurred."}