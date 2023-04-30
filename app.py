# app.py
from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

# Créer le chatbot
bot = ChatBot("Chatbot")
trainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.french")

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/get")
def get_bot_response():
   user_input = request.args.get("msg")
   bot_response = bot.get_response(user_input)
   return str(bot_response)

if __name__ == "__main__":
   app.run()