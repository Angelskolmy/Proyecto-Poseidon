import { serviciosHistoricos } from "./Db._dicionarios.js";
console.table(serviciosHistoricos)
let lista_registros = listarTodo(serviciosHistoricos);
// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
    return console.table(registro);
}
function listarTodo(datos) {
    let registros = datos
    let valores = [...registros.values()]
    return valores;
}

mostrarRegistro(lista_registros)

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
console.log("El total general es:", resultado);


//------------------ NIVEL 2 · Datos ----------
import { vehiculos } from "./Db._dicionarios.js";

export function personasUnicas(datos) {
    const personas = new Set();

    for (const vehiculo of datos.values()) {
        personas.add(vehiculo.Numero_Tel);
    }

    return personas.size;
}

const resultadoPersonas = personasUnicas(vehiculos);

console.log("Personas diferentes:", resultadoPersonas);