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

// Pruebas
console.log(`Promedio: ${promedio(serviciosHistoricos)}`);
console.log(`Promedio sin servicios: ${promedio(new Map())}`);
