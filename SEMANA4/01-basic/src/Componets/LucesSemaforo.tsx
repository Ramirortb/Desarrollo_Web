import { useSemaforo } from "../context/SemaforoContext";

const LucesSemaforo = () => {
  const { color } = useSemaforo();

  return (
    <>
      <div className={`w-20 h-20 rounded-full ${color === "rojo" ? "bg-red-500 opacity-100" : "bg-red-500 opacity-30"}`} />
      <div className={`w-20 h-20 rounded-full ${color === "amarillo" ? "bg-yellow-500 opacity-100" : "bg-yellow-500 opacity-30"}`} />
      <div className={`w-20 h-20 rounded-full ${color === "verde" ? "bg-green-500 opacity-100" : "bg-green-500 opacity-30"}`} />
    </>
  );
};

export default LucesSemaforo;

