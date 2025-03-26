import { useState, useEffect } from "react";

function RelojDigital() {
  // useState se utiliza para manejar el estado de la hora actual.
  // Inicializamos el estado con la hora actual usando new Date().
  const [horaActual, setHoraActual] = useState(new Date());

  // useEffect se utiliza para realizar efectos secundarios en el componente,
  // como configurar un intervalo para actualizar la hora cada segundo.
  useEffect(() => {
    // setInterval configura un intervalo que ejecuta una función cada 1000 milisegundos (1 segundo).
    // La función actualiza el estado horaActual con la nueva hora.
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    // La función de limpieza se ejecuta cuando el componente se desmonta.
    // clearInterval limpia el intervalo para evitar fugas de memoria.
    return () => clearInterval(intervalo);
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente.

  // toLocaleTimeString formatea la hora actual en el formato "HH:MM:SS"
  // usando la localización "es-ES" (español de España).
  const horaFormateada = horaActual.toLocaleTimeString("es-ES", {
    hour: "2-digit", // Formato de hora de 2 dígitos (00-23).
    minute: "2-digit", // Formato de minutos de 2 dígitos (00-59).
    second: "2-digit", // Formato de segundos de 2 dígitos (00-59).
  });

  // El componente renderiza un p con la hora formateada.
  return <p>{horaFormateada}</p>;
}

export default RelojDigital;
