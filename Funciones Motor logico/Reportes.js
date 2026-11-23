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

import { vehiculos, tipoServicio } from "./Db._dicionarios.js";

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
        Monto: servicio.Precio_Serv
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