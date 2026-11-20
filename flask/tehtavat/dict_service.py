import json
import os

from flask import Flask, Response

dictionaryPath = os.path.join(os.path.dirname(__file__), "dictionary.json")


with open(dictionaryPath, "r") as dataRead:
    dictionary= json.load(dataRead)

app = Flask(__name__)
@app.route('/translate/<text>')
def translate(text):
    word = str.lower(text)
    try:
        translation = dictionary[word]
        response = {
            "English" : text, "Finnish": translation
        }
    
    except KeyError:
        response = {
            "error": "Word not found",
        }

    return response


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)