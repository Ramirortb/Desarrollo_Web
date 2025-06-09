
/*import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
import { SemaforoProvider } from "./context/SemaforoContext";
import LucesSemaforo from "./Componets/LucesSemaforo.tsx";
import BotonesSemaforo from "./Componets/BotonesSemaforo";

const App = () => {
  return (
    <SemaforoProvider>
      <div className="flex flex-col items-center space-y-4 mt-10">
        <LucesSemaforo />
        <BotonesSemaforo />
      </div>
    </SemaforoProvider>
  );
};

export default App;

