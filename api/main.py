import time
from flask import Flask, jsonify, request, make_response, send_from_directory
from flask_cors import CORS
import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()
nltk.download('punkt')
import numpy
import tflearn
import tensorflow as tf
import random
import json
import pickle
import os

app = Flask(__name__)
CORS(app)

with open("intents.json") as file:
    data = json.load(file)

#storing variables in a pickle file in order to shorten compiling time
try:
    with open("data.pickle", "rb") as f:
        all_words, tags, training, output = pickle.load(f)
except:
    all_words = []
    tags = []
    group = []
    group_tag = []

# Set up double for loop. We do two things:
# -	We tokenize all questions and add them to a list called words (collects all question words)
# -	We take all the tokenized question words, add group them in a list, group, and the corresponding “type” of questions in group_tag

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            question_words = nltk.word_tokenize(pattern) 
            all_words.extend(question_words) 
            group.append(question_words) 
            group_tag.append(intent["tag"]) 

        if intent["tag"] not in tags:
            tags.append(intent["tag"])

#For every group of question words, a list with length of all_words is created with values of "1" or "0" depending on if the stemmed
#question word exists in the all_words list or not. A corresponding list denoting the "tag" of the word in created. Now, we
#have a list of lists that show if user inputs with those words exist(input to our model), it will correlate to a certain "tag"(output training model). 
#The length of our model input will be the total number of questions for each "tag" in our intents file. 

    all_words = [stemmer.stem(w.lower()) for w in words if w != "?"]
    all_words = sorted(list(set(words)))

    tags = sorted(tags)

    training = []
    output =[]
    out_empty = [0 for _ in range(len(tags))]

    for x, words in enumerate(group):
        binary = []

        question_words = [stemmer.stem(w) for w in words]

        for w in all_words:
            if w in question_words:
                binary.append(1)
            else:
                binary.append(0)

        output_row = out_empty[:]
        output_row[tags.index(group_tag[x])] = 1

        training.append(binary)
        output.append(output_row)

    training = numpy.array(training)
    output = numpy.array(output)

    with open("data.pickle", "wb") as f:
        pickle.dump((all_words, tags, training, output),f)

tf.reset_default_graph()

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


#Training model will output array of different values with probability of which tag input is most likely associated with input.
#Chooses highest probability with threshold of 70% or higher

def binary_of_words(input, words):
    binary = [0 for _ in range(len(words))]

    input_words = nltk.word_tokenize(input)
    input_words = [stemmer.stem(word.lower()) for word in input_words]

    for word in input_words:
        for i,w in enumerate(words):
            if w == word:
                binary[i] = 1
            
    return numpy.array(binary)

def chat(question):
        results = model.predict([binary_of_words(question,words)])[0]
        results_index = numpy.argmax(results)
        tag = tags[results_index]

        if results[results_index] > 0.7:
            for tg in data["intents"]:
                if tg['tag'] == tag:
                    responses = tg['responses']

            return random.choice(responses)
        else: 
            return "I don't quite understand the question. Ask another one." 

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/test')
def hello():
    return {"status": "success"}

@app.route("/api/chat", methods=["POST"])
def api():
    question = request.get_json()
    danielResponse = chat(question["value"])
    response = make_response(jsonify({"user":question["value"],"daniel":danielResponse}), 200)
    return response
        
if __name__ == "__main__": 
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
    print("mounted server")


