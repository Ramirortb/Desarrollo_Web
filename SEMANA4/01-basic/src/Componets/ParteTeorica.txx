1. ¿Qué hace el hook useState? Dé un ejemplo.  

El hook useState permite gestionar el estado en los componentes funcionales de React. Es útil para actualizar datos dentro del componente sin necesidad de una clase.

import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
}

export default Contador;

Aquí, contador es el estado inicial, y setContador es la función que lo actualiza cuando el usuario hace clic en el botón.



2. ¿Qué es un fragmento (<> </>) y para qué sirve?  

Un fragmento en React (<> </>) es una forma de agrupar múltiples elementos sin añadir nodos innecesarios al DOM.

<div>
  <h1>Hola</h1>
  <p>Bienvenido</p>
</div>

Esto agrega un div innecesario al DOM. Usando un fragmento, evitamos ese contenedor adicional:

<>
  <h1>Hola</h1>
  <p>Bienvenido</p>
</>




3. ¿Qué diferencia hay entre useContext y useState?  


useState: Se usa para manejar estados locales dentro de un componente.

useContext: Se usa para compartir estados entre múltiples componentes sin necesidad de pasar props manualmente.

import { createContext, useState, useContext } from "react";

const SemaforoContext = createContext();

export function SemaforoProvider({ children }) {
  const [color, setColor] = useState("rojo");

  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  );
}

export function useSemaforo() {
  return useContext(SemaforoContext);
}


4. ¿Cuál es la estructura básica de un componente funcional?


Un componente funcional en React es simplemente una función que retorna JSX.

function Saludo() {
  return <h1>Hola, bienvenido a React</h1>;
}

export default Saludo;


Si el componente tiene estado, se pueden usar hooks como useState o useContext dentro de la función.

