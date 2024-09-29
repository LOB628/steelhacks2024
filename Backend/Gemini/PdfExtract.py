# importing required modules
from pypdf import PdfReader
import os

# creating a pdf reader object
reader = PdfReader(os.getcwd() + "/Backend/Gemini/PittClasses.pdf")

# printing number of pages in pdf file

f = open("courses.txt", "w")

# getting a specific page from the pdf file
for page in range(822, 2105):
    Pdf = reader.pages[page]
    text = Pdf.extract_text()
    f.write(text)

    
f.close()