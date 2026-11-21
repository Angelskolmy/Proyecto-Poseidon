import {
    serviciosHistoricos,
    vehiculos,
    tipoServicio,
    prompts,

} from "./Db._dicionarios.js";

//console.table(serviciosHistoricos);
let lista_registros = listarTodo(serviciosHistoricos);


// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
    //Juan-cuartas
    console.log("||---------------- Tabla: Lista de registros ----------------||")
    return console.table(registro);
}

function listarTodo(datos) {
    //Juan-cuartas
    let registros = datos
    let valores = [...registros.values()]
    return valores;
}


// ---------- NIVEL 2 · Reportes ----------
export function totalGeneral(datos) {
    //Lauren
    let total = 0;

    for (const servicio of datos.values()) {
        total += servicio.Monto;
    }
    return total;
}

export function promedio(datos) {
    //Joimar

    let promedio = totalGeneral(datos) / datos.size
    if (datos.size === 0) {
        return new Map(
            [
                ["Promedio", 0],
            ]
        );
    };
    console.log("||---------------- Tabla: Promedio ----------------||")
    return new Map(
        [
            ["Promedio", Math.round(promedio)]
        ]
    );
}

function registroMayor(datos) {
    //Juan-cuartas
    let registros = datos;
    let mayorMonto = 0;
    let tableMayormonto = null;

    for (let i = 0; i < registros.length; i++) {
        if (mayorMonto < registros[i].Monto) {
            mayorMonto = registros[i].Monto
            tableMayormonto = registros[i];
        }
    }
    console.log("||---------------- Tabla: Registro mayor ----------------||")
    return tableMayormonto;
}

function filtrarPorCategoria(datos, categoria) {
    //Angel: Pendiente
}

function totalesPorCategoria(datos) {
    //Juan-cuartas
    let registros = datos
    let categorias = new Map(
        [
            ["Polichada", 0],
            ["Lavada_Sencilla", 0],
            ["Lavada_Completa", 0],
            ["Encerado", 0]
        ]
    )
    //categorias.set("Polichada", registros[0].Monto)
    for (let i = 0; i < registros.length; i++) {
        if (registros[i].ID_TipoServicio === 1) {
            categorias.set("Polichada", categorias.get("Polichada") + registros[i].Monto)

        } else if (registros[i].ID_TipoServicio === 2) {
            categorias.set("Lavada_Sencilla", categorias.get("Lavada_Sencilla") + registros[i].Monto)

        } else if (registros[i].ID_TipoServicio === 3) {
            categorias.set("Lavada_Completa", categorias.get("Lavada_Completa") + registros[i].Monto)

        } else {
            categorias.set("Encerado", categorias.get("Encerado") + registros[i].Monto)
        };
    }
    console.log("||---------------- Tabla: Total por categoria ----------------||")
    return categorias;
}


// ---------- NIVEL 3 · Set & Map ----------
export function personasUnicas(datos) {
    const personas = new Set();

    for (const vehiculo of datos.values()) {
        personas.add(vehiculo.Numero_Tel);
    }
    console.log("||---------------- Tabla: Personas únicas ----------------||")
    return new Map(
        [
            ["Personas", personas.size]
        ]
    );
}

//Recurrentes lentos
export function recurrentesLento(datos) {
    //Jhoimar
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
    console.log("||---------------- Tabla: Recurrentes Lento ----------------||")
    return [...recurrentes];
}


//Recurrentes rapidos
export function recurrentesRapido(datos) {
    //Jhoimar
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
        console.log("||---------------- Tabla: Recurrentes Rápido ----------------||")
    return recurrentes;
}

function categoriaEstrella(datos) {
    //Angel: pendiente
}

function parQueSuma(datos, objetivo) {
    //Juan-cuartas
    if (objetivo === null || objetivo === undefined) {
        console.log("Faltó asignar el segundo parametro directamente en la función parQueSuma(datos, objetivo)")
        console.log("A continuación asignelo desde la consola...")
        objetivo = Number(prompts("Ingrese un valor para filtrar dos registros correspondientes: "))
    }

    let registros = datos;
    let parSumado = new Map(
        [
            ["Registro_1", null],
            ["Registro_2", null]
        ]
    );
    //console.log(parSumado);
    for (const registro of registros) {
        //console.log(registro.Monto);
        if (registro.Monto === objetivo) {
            if (parSumado.get("Registro_1") === null) {
                parSumado.set("Registro_1", registro);
            } else {
                parSumado.set("Registro_2", registro);
            }
        }
    }
        console.log("||---------------- Tabla: Pares que suman lo mismo ----------------||")
    return [...parSumado.values()];
}
// ---------- NIVEL 4 · Cola y pila ----------



// Se esta definiendo la asignacion de tareas para los integrantes en este nivel, haremos feedback antes de.


// ---------- Zona de pruebas ----------
console.log ("")
console.log ("||-----------------------------------||")
console.log ("||Pruebas de error con registros...  ||")
console.log ("||-----------------------------------||")
console.log ("")
//Funciones: Juan Cuartas
mostrarRegistro(lista_registros);
console.table(registroMayor(lista_registros));
console.table(totalesPorCategoria(lista_registros));
console.table(parQueSuma(lista_registros, 40000));

//Funciones: Jhoimar
console.table(promedio(serviciosHistoricos));
console.table(recurrentesLento(serviciosHistoricos));
console.table(recurrentesRapido(serviciosHistoricos));


//Funciones: Lauren
console.log("||---------------- Tabla: Total General ----------------||")
console.table({ "Total general": totalGeneral(serviciosHistoricos) });
console.table(personasUnicas(vehiculos));

//Funciones: Angel - Pendiente.

// __________________Pruebas con Arrays vacíos_____________________________//
console.log ("")
console.log ("||-----------------------------------||")
console.log ("||Pruebas de error con arrays vacíos.||")
console.log ("||-----------------------------------||")
console.log ("")
mostrarRegistro(new Set()); //Prueba array vacio, funcional.
console.table(registroMayor(new Set())); //Prueba con array vacío, funcional devuelve null.
console.table(totalesPorCategoria(new Set())); //Prueba con array vacío, funcional.
console.table(parQueSuma(lista_registros,)); //Devuelve null o los dos valores, funcional.
console.table(parQueSuma(new Set(), 40000)); //Devuelve null o los dos valores, funcional.

console.table(promedio(new Set())); //Prueba con array vacío, funcional.
console.table(recurrentesLento(new Set())); //Prueba con array vacío, funcional.
console.table(recurrentesRapido(new Set())); //Prueba con array vacío, funcional.

console.table(totalGeneral(new Set())); // Prueba con array vacío, funcional.
console.table(personasUnicas(new Set())); // Prueba con array vacio, funcional.