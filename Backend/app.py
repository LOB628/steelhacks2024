#API Stuff
from flask import Flask, request
from flask_cors import CORS, cross_origin
import os
import threading
#Utils
from dotenv import load_dotenv
#Gemini Functions
from Gemini.Chat import LiveChat
from Gemini.Gemini import Gemini
from Gemini.CourseRec import genRecommandtions

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/api": {"origins":"*"}})

chatObj = LiveChat

@app.route('/api/gemini', methods=['GET', 'POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def gemi():
    prompt = request.form.get('Interests')
    #print(prompt['content'])
    os.chdir("..")
    print(os.getcwd())
    try:
        res = genRecommandtions(prompt)
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
    
    chatHistory = request.form.get('LastMsg')
    if (chatHistory == ""):
        return {'Code': 201, 'Response': 'Success'}
    chatObj.history.append({'role':'model', 'parts':chatHistory})
    return {'Code': 200, 'Response': chatObj.history, 'Input': chatHistory}


@app.route('/api/chat', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def chat():
    message = request.form.get('classes')
    #*assumes message comes from a formdata() and not a request.

    try:
        response = chatObj.send_message(message)
        return {'Code': 200, 'Response': response}
    except():
        return {'Code': 500, 'Response': "An error occurred."}
    
@app.route('/api/pitt-api', methods=['POST'])
@cross_origin(origin="*", headers=['Content-Type', 'Authorization'])
def pitt():
    message = request.form.get('classes')
    #*assumes message comes from a formdata() and not a request.

    try:
        response = chatObj.send_message(message)
        return {'Code': 200, 'Response': response}
    except():
        return {'Code': 500, 'Response': "An error occurred."}
    
def init_front():
    path = os.getcwd()
    os.chdir(path + "/Frontend/")
    os.system("npx vite")

def init_back():
    app.run(port=8080)

if(__name__ == '__main__'):
    #init_front()

    front = threading.Thread(target=init_front)
    back = threading.Thread(target=init_back)

    front.start()
    back.start()

    front.join()
    back.join()
    