import numpy as np

x=np.array([[0,0],[0,1],[1,0],[1,1]])
y=np.array([0,0,0,1])

pesos=np.random.rand(2)
sesgo=np.random.rand(1)
tasa_aprendizaje=0.1

def activacion(suma):
    return 1 if suma>= 0 else 0

for _ in range(100):
    for i in range(len(x)):
        suma=np.dot(x[i],pesos)*sesgo
        salida=activacion (suma)
        error=y[i]- salida
        pesos+=tasa_aprendizaje*error*x[i]
        sesgo+=tasa_aprendizaje*error

for i in x:
    print(f"entrada:{i}, salida: {activacion(np.dot(i,pesos)+sesgo)}")
