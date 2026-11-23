import { serviciosHistoricos } from "./Db._dicionarios.js";
import { vehiculos, tipoServicio } from "./Db._dicionarios.js";
console.table(serviciosHistoricos);
let lista_registros = listarTodo(serviciosHistoricos);
// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
  return console.table(registro);
}
function listarTodo(datos) {
  let registros = datos;
  let valores = [...registros.values()];
  return valores;
}

mostrarRegistro(lista_registros);

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

export function personasUnicas(datos) {
  const personas = new Set();

  for (const vehiculo of datos.values()) {
    personas.add(vehiculo.Numero_Tel);
  }

  return personas.size;
}

//------------------ NIVEL 3 · PILA & COLA ----------

// Mostramos el resultado
console.log("El total general es:", resultado);

// Nuestra fila de atención
const colaDeAtencion = [];

// FUNCIÓN PARA RECIBIR UN VEHÍCULO
function llegar(ID_Vehiculo, ID_TipoServicio) {
  // Buscamos el vehículo en nuestro motor de datos
  const vehiculo = vehiculos.get(ID_Vehiculo);

  // Buscamos el tipo de servicio
  const servicio = tipoServicio.get(ID_TipoServicio);

  // Revisamos que los datos existan
  if (!vehiculo || !servicio) {
    console.log("Vehículo o servicio no encontrado");
    return;
  }

  // Creamos la información de la atención
  const nuevaAtencion = {
    ID_Vehiculo: ID_Vehiculo,
    ID_TipoServicio: ID_TipoServicio,
    Tipo: vehiculo.Tipo,
    Servicio: servicio.Tipo_Serv,
    Monto: servicio.Precio_Serv,
  };

  // Agregamos el vehículo al final de la fila
  colaDeAtencion.push(nuevaAtencion);

  console.log("Vehículo agregado a la cola:", nuevaAtencion);
}

// FUNCIÓN PARA ATENDER UN VEHÍCULO
function atender() {
  // Sacamos al primer vehículo de la fila
  const atencion = colaDeAtencion.shift();

  // Revisamos si hay vehículos esperando
  if (!atencion) {
    console.log("No hay vehículos en espera");
    return;
  }

  console.log("Atendiendo vehículo:", atencion);

  return atencion;
}

// FUNCIÓN PARA MOSTRAR LA COLA
function mostrarCola() {
  console.log("Vehículos esperando:", colaDeAtencion);
}

// EJEMPLO DE FUNCIONAMIENTO

llegar("ABC123", 1);
llegar("XYZ789", 2);
llegar("DEF456", 3);

mostrarCola();

atender();

mostrarCola();

const cantidadPersonasUnicas = personasUnicas(vehiculos);
console.log("Cantidad de personas únicas:", cantidadPersonasUnicas);
