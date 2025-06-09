import { createContext, useContext, useState, ReactNode } from "react";

type SemaforoContextType = {
  color: string;
  cambiarColor: (nuevoColor: string) => void;
};

const SemaforoContext = createContext<SemaforoContextType | undefined>(undefined);

export const SemaforoProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState("rojo"); // Estado inicial

  const cambiarColor = (nuevoColor: string) => {
    setColor(nuevoColor);
  };

  return (
    <SemaforoContext.Provider value={{ color, cambiarColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};

export const useSemaforo = () => {
  const context = useContext(SemaforoContext);
  if (!context) throw new Error("useSemaforo debe usarse dentro de SemaforoProvider");
  return context;
};

