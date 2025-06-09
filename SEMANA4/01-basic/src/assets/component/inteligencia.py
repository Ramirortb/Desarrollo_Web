# Instalación de librerias


#pip install numpy pandas sklearn nltk matlotlib

# Importacion de librerias

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

# Descargamos stopwords en español

nltk.download("punkt")
nltk.download("stopwords")

# Creamos conjunto de títulos de noticias sobre varios eventos

articulos =[
  "Cierres viales en La Mariscal por operativo policial",
  "El operativo contará con la participación de 30 agentes civiles",
  "Te recomendamos tomar las siguientes vías alternas por control policial",
  "Ordenanza para ampliar normativa del Metro al Trole y alimentadores",
  "Multas por el mal uso de las instalaciones del metro",
  "Inconformidad por el mal servicio del metro en Quito",
  "Municipio investiga caso de crueldad animal en Carcelén",
  "Crueldad animal en los valles alertan a la población",
  "Animales maltratados en los alrededores de Quito",
  "Sube la percepción de seguridad en el Centro Histórico",
  "Disminución de delincuencia en el centro de quito",
  "Menos asesinatos y robos en el sur de la ciudad",
]

# Convertimos el texto en minúsculas, eliminamos stopwords y signos de puntuación

def limpiar_texto (texto):

    texto=texto.lower()
    texto= texto.translate(str.marketrans("", "", string.punctuation))
    palabras = word_tokenize(texto)
    palabras=word_tokenize(texto)
    palabras=[word for word in palabras if word not in stopwords.words("spanish")]
    return "". join(palabras)
    articulos_procesados=[limpiar_texto(articulo)for articulo in articulo]

# Convertimos los textos en vectores numéricos usando TF-IDF.

    vectorizer = IfidfVectorizar()
    x=vectorizer.fit_transform(articulos_procesados)

# Determinar el Número de Clústeres (Elbow Method)

    inertia =[]
    k_values = range(1,6)

    for k in k-VALUES:
        kmeans = kmeans(n_clusters=k, randon_state=42, n_init=10)
        kmeans.fit(x)
        inertia.append(kmeans.inertia)

        plt.plot(k_values,inertia,marker="0")
        plt.xlabel("numero de clusters (k)")
        plt.ylabel("inercia")
        plt.title("metodo del codo para elegir k")
        plt.show()

# Aplicar K-Means para Agrupar Artículos
    kmeans =kmeans (n_clusters=3, randon_state=42, n_init=10)
    df =pd.dataframe ({"Articulo": articulos, "Cluster": kmeans.fit_predict(x)})

# Mostramos los artículos con su clúster asignado:

    print(df.sort_values("Cluster"))