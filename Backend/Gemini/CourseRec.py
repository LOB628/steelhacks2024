import google.generativeai as genai
from dotenv import load_dotenv
import os
#! Course Recommendations!

def genRecommandtions(ScholarlyArea):
    #prompt is the class or area of knowledge the student wants to learn
    load_dotenv()
    key = os.getenv('GEMINI_KEY')

    #!Configuring the Gemini Model
    genai.configure(api_key=key) 
    model = genai.GenerativeModel('gemini-1.5-flash')

    prompt = "What classes would you recommend to a student trying"\
            " to learn more about " + ScholarlyArea + ". Please format your response in the following JSON format: " \
            "{ \"class1Name\": \"Discrete Structures\", \"class1Number\": \"CS 0441\", \"class2Name\": \"\", " \
            " \"class2Number\": \"\",  \"class3Name\": \"\", \"class3Number\": \"\", \"class4Name\": \"\",\"\ " \
            " \"class4Number\": \"\",}"
    print(prompt) #did it

    res = model.generate_content(prompt)
    print(res.text)
    return res.text

if(__name__ == "__main__"):
    genRecommandtions("Sociology")