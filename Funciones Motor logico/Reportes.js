import { serviciosHistoricos } from "./Db._dicionarios.js";

export function totalGeneral(datos) {
    let total = 0;

    for (const servicio of datos.values()) {
        total += servicio.Monto;
    }

    return total;
}

export function promedio(datos) {
    if (datos.size === 0) {
        return 0;
    }

    return totalGeneral(datos) / datos.size;
}

//Recurrentes lentos
export function recurrentesLento(datos) {
    const recurrentes = new Set();

    for (const servicio of datos.values()) {
        let apariciones = 0;

        for (const otroServicio of datos.values()) {
            if (otroServicio.ID_Vehiculo === servicio.ID_Vehiculo) {
                apariciones++;
            }
        }

        if (apariciones > 1) {
            recurrentes.add(servicio.ID_Vehiculo);
        }
    }

    return [...recurrentes];
}


//Recurrentes rapidos

export function recurrentesRapido(datos) {
    const aparicionesPorVehiculo = new Map();

    for (const servicio of datos.values()) {
        const idVehiculo = servicio.ID_Vehiculo;
        const apariciones = aparicionesPorVehiculo.get(idVehiculo) ?? 0;
        aparicionesPorVehiculo.set(idVehiculo, apariciones + 1);
    }

    const recurrentes = [];

    for (const [idVehiculo, apariciones] of aparicionesPorVehiculo) {
        if (apariciones > 1) {
            recurrentes.push(idVehiculo);
        }
    }

    return recurrentes;
}


export function agregarRegistro(datos, registro) {
    datos.push(registro);
    return datos;
}


// Pruebas
console.log(`Promedio: ${promedio(serviciosHistoricos)}`);
console.log(`Promedio sin servicios: ${promedio(new Map())}`);
console.log(`Recurrentes lento: ${JSON.stringify(recurrentesLento(serviciosHistoricos))}`);
console.log(`Recurrentes rápido: ${JSON.stringify(recurrentesRapido(serviciosHistoricos))}`);
console.log(`Recurrentes lento sin servicios: ${JSON.stringify(recurrentesLento(new Map()))}`);
console.log(`Recurrentes rápido sin servicios: ${JSON.stringify(recurrentesRapido(new Map()))}`);

const pilaRegistros = [{ estado: "Estado anterior" }];
const nuevoRegistro = { estado: "Nuevo estado" };
console.log(`Pila después de agregar el registro: ${JSON.stringify(agregarRegistro(pilaRegistros, nuevoRegistro))}`);
console.log(`Registro en la cima: ${JSON.stringify(pilaRegistros[pilaRegistros.length - 1])}`);
