import { serviciosHistoricos } from "./Db._dicionarios.js";

// Esta función suma todos los montos
export function totalGeneral(datos) {
  let total = 0;

  for (const servicio of datos.values()) {
    total += servicio.Monto;
  }

  return total;
}

// Llamamos la función y le entregamos los datos
const resultado = totalGeneral(serviciosHistoricos);

// Mostramos el resultado
console.log("El total general es:", resultado);
