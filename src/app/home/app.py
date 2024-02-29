import json
import os
from flask import Flask,jsonify, request, Response
from flask import request
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

@app.route('/gets', methods = ['GET'])
def getf():
    return json.dumps("connected")

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLD = '/Users/vasanthakumarb/Desktop/EndtoEnd'
UPLOAD_FOLDER = os.path.join(APP_ROOT, UPLOAD_FOLD)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/hope', methods=['POST'])
def upload_file():
    file = request.files['file']

    if 'file' not in request.files:
     print('no file in request')
     return jsonify("no file")

    if file.filename == '':
       print('no selected file')
       return jsonify("file is empty")
    if file :
      #print("hello")
      filename = (file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      return jsonify("file uploaded ")

if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0",port=5003)