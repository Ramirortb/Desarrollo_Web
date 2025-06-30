import TensorFlow as tf
from TensorFlow import keras
import numpy as np

x_train =np.array([[0,0],[0,1],[1,0],[1,1]],)
y_train=np.array[0,1,1,0]


modelo = keras.Sequential([
    keras.layers.dense(4,activation='relu'),
    keras.layers.dense(1,activation='sigmoid')
])

modelo.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
modelo.fit(x_train,y_train,epochs=500, verbose=0)

print(modelo.predict(x_train))

