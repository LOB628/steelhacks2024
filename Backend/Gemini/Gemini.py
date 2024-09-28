import google.generativeai as genai
from dotenv import load_dotenv
import os

def Gemini(prompt):
    load_dotenv()
    key = os.getenv('GEMINI_KEY')

    #!Configuring the Gemini Model
    genai.configure(api_key=key) 
    model = genai.GenerativeModel('gemini-1.5-flash')
    print(prompt)
    res = model.generate_content(prompt)
    print(res.text)
    return res.text

if(__name__ == "__main__"):
    print(Gemini())