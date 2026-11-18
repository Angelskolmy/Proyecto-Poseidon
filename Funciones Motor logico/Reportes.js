import { serviciosHistoricos } from "./Db._dicionarios.js";

export function promedio(datos) {
    if (datos.length === 0) {
        return 0;
    }

    const total = datos.reduce((acumulado, registro) => acumulado + registro.Monto, 0);
    return total / datos.length;
}

// Pruebas
console.log(promedio([...serviciosHistoricos.values()]));
console.log(promedio([]));