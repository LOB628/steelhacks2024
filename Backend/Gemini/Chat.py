import os
from dotenv import load_dotenv
import google.generativeai as genai


class LiveChat:
    def __init__(self, instruction):
        #*Setting up the chat
        load_dotenv()
        key = os.getenv('GEMINI_KEY')
        genai.configure(api_key=key) 
        
        #* Picking a model, setting base instructions. 
        self.model_name = "gemini-1.5-flash-001"
        self.instruction = instruction
        self.model = genai.GenerativeModel(model_name=self.model_name, system_instruction=self.instruction)

        #* Starting a chat from cached content
        self.chat = self.model.start_chat()
        self.cached_content = None
        self.history = []
         
    def send_message(self, msg):
        #*Takes the chat, adds to it, caches it. Returns the response.
        #* The chat is a list of dictionaries with the user, and their message. 
        print(self.history)
        self.chat = self.model.start_chat(history=self.history)
        response = self.chat.send_message(msg)
        self.history.append({'role':'user', 'parts': msg})
        self.history.append({'role':'model', 'parts':response.text})
        #self.cache(self.chat.history)
        return response.text
    
    


        