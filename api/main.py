import time
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()
nltk.download('punkt')
import numpy
import tflearn
import tensorflow
import random
import json
import pickle


app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*":{
        "origins": "*"
    }
})

with open("intents.json") as file:
    data = json.load(file)

#storing variables in a pickle file in order to shorten compiling time
try:
    with open("data.pickle", "rb") as f:
        words, labels, training, output = pickle.load(f)
except:
    words = []
    labels = []
    docs_x = []
    docs_y = []

#Tokenizing all question words and 1) adding them all to a words array 2) adding groups of words w/ associated tags

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            wrds = nltk.word_tokenize(pattern) 
            words.extend(wrds) # words = ["Hi", "how", "are", you"]
            docs_x.append(wrds) # docs_x = [["Hello"],["Hi", "how", "are", "you"]]
            docs_y.append(intent["tag"]) #doc_y = [["greeting"]]

        if intent["tag"] not in labels:
            labels.append(intent["tag"])

#Stemming all question words and pattern words, getting rid of repeats. Created an array of 1 and 0's denoting whether 
#a stemmed word in current pattern exists in collection of stemmed words. Outputs will denote position of tag in the array a '1'

    words = [stemmer.stem(w.lower()) for w in words if w != "?"]
    words = sorted(list(set(words)))

    labels = sorted(labels)

    training = []
    output =[]
    out_empty = [0 for _ in range(len(labels))]

    for x, doc in enumerate(docs_x):
        bag = []

        wrds = [stemmer.stem(w) for w in doc]

        for w in words:
            if w in wrds:
                bag.append(1)
            else:
                bag.append(0)

        output_row = out_empty[:]
        output_row[labels.index(docs_y[x])] = 1

        training.append(bag)
        output.append(output_row)

    training = numpy.array(training)
    output = numpy.array(output)

    with open("data.pickle", "wb") as f:
        pickle.dump((words, labels, training, output),f)

tensorflow.reset_default_graph()

#Put input as all words. Training model will output array of different values associated with which tag has highest probability.
#Choose highest probability with threshold of 70% or higher

net = tflearn.input_data(shape=[None,len(training[0])])
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,len(output[0]), activation="softmax")
net = tflearn.regression(net)

model = tflearn.DNN(net)  

try:
    model.load("model.tflearn")
except:
    model.fit(training,output, n_epoch=1500, batch_size=8, show_metric=True)
    model.save("model.tflearn")

def bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]

    s_words = nltk.word_tokenize(s)
    s_words = [stemmer.stem(word.lower()) for word in s_words]

    for se in s_words:
        for i,w in enumerate(words):
            if w == se:
                bag[i] = 1
            
    return numpy.array(bag)

def chat(question):
        results = model.predict([bag_of_words(question,words)])[0]
        results_index = numpy.argmax(results)
        tag = labels[results_index]

        if results[results_index] > 0.7:
            for tg in data["intents"]:
                if tg['tag'] == tag:
                    responses = tg['responses']

            return random.choice(responses)
        else: 
            return "I don't quite understand the question. Ask another one." 

@app.route("/test", methods=['GET'])
def test():
    print("connected")
    return {"status": "success"}

@app.route("/api", methods=['POST'])
def api():
    question = request.get_json()
    danielResponse = chat(question["value"])
    response = make_response(jsonify({"user":question["value"],"daniel":danielResponse}), 200)
    return response
        

if __name__ == "__main__":
    app.run(host='localhost', port=5000)

print("mounted server")
