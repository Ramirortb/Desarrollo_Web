import { useSemaforo } from "../context/SemaforoContext";

const BotonesSemaforo = () => {
  const { cambiarColor } = useSemaforo();

  return (
    <>
      <button className="bg-red-500 text-white px-4 py-2 m-2" onClick={() => cambiarColor("rojo")}>Luz Roja</button>
      <button className="bg-yellow-500 text-white px-4 py-2 m-2" onClick={() => cambiarColor("amarillo")}>Luz Amarilla</button>
      <button className="bg-green-500 text-white px-4 py-2 m-2" onClick={() => cambiarColor("verde")}>Luz Verde</button>
    </>
  );
};

export default BotonesSemaforo;
