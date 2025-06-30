from textblob import TextBlob
texto="me encanta la inteligencia artificial, es increible."
analisis=TextBlob
print("Sentimiento:", analisis.sentiment.polaryty)
