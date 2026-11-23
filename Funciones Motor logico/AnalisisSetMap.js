import {
    serviciosHistoricos,
    tipoServicio,
    prompts

} from "./Db._dicionarios.js";



// ---------- NIVEL 1 · Datos ----------
export function mostrarRegistro(registro) {
    //By Juan-cuartas
    console.log("||---------------- Tabla: Lista de registros ----------------||")
    return console.table(registro);
}

export function listarTodo(datos) {
    //By Juan-cuartas
    let registros = datos
    let valores = [...registros.values()]
    return valores;
}

// ---------- NIVEL 2 · Reportes ----------
export function totalGeneral(datos) {
    //By Lauren
    let total = 0;

    for (const servicio of datos.values()) {
        total += servicio.Monto;
    }
    return total;
}

export function promedio(datos) {
    //By Jhoimar
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

export function registroMayor(datos) {
    //By Juan-cuartas
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

export function filtrarXdatos() {
    //By Angel
    let Archive = new Map()
    let impArchive = new Map()
    let truncont = 0

    console.log("Servicios Disponibles")

    for (let [ors, tet] of tipoServicio.entries()) {

        truncont += 1

        impArchive.set(ors, {

            Num_opcion: truncont,
            Servicio: tet.Tipo_Serv

        })

    }

    let orkust = Array.from(impArchive, ([Marine, Orko]) => ({

        idservicio: Marine,
        ...Orko

    }))

    console.table(orkust)

    let galiard

    while (true) {

        galiard = Number(prompts("ingrese numero de servicio a filtrar "))

        if (galiard < 0 || galiard > 4 || !Number.isInteger(galiard)) {
            console.log("entrada invalida solo numeros, 4 opciones disponibles")
            continue
        }

        break

    }

    let nombreServ = null

    if (galiard == 1) {
        nombreServ = "Polichada"
    }

    else if (galiard == 2) {
        nombreServ = "Lavada sencilla"
    }

    else if (galiard == 3) {
        nombreServ = "Lavada completa"
    }
    else if (galiard == 4) {
        nombreServ = "Encerado"
    }


    for (let [sigis, muund] of serviciosHistoricos.entries()) {

        if (galiard === muund.ID_TipoServicio) {

            Archive.set(sigis, {

                Servicio: nombreServ,
                Placa: muund.ID_Vehiculo,
                Fecha: muund.Fecha,
                obsevaciones: muund.Observaciones,
                Monto: muund.Monto,

            })

        }

    }

    let overhand = Array.from(Archive, ([nunu, volibear]) =>

    ({
        Numeral_servicio: nunu,
        ...volibear

    })

    )

    console.table(overhand)

}

export function totalesPorCategoria(datos) {
    //By Juan-cuartas
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
    //By Lauren
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
    //By Jhoimar
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
    console.log("||---------------- Tabla: Recurrentes lentos ----------------||")
    return [...recurrentes];
}

//Recurrentes rapidos
export function recurrentesRapido(datos) {
    //By Jhoimar
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
        console.log("||---------------- Tabla: Recurrentes rápidos ----------------||")
    return recurrentes;
}

export function categoriaEstrella() {
    //By Angel
    let imprint = new Map()

    let juge = null

    for (let [anduril, farant] of tipoServicio.entries()) {
        let sumop = 0

        for (let [velkoz, velbet] of serviciosHistoricos.entries()) {

            if (anduril === velbet.ID_TipoServicio) {

                sumop += 1
            }
        }

        imprint.set(anduril, {
            Nombre_servicio: farant.Tipo_Serv,
            Registros_Totale: sumop,
        })
    }

    for (let [Ryze, fortune] of imprint.entries()) {

        if (juge == null || fortune.Registros_Totale > juge.contenidojusg.Registros_Totale) {

            juge = { indice: Ryze, contenidojusg: fortune }

        }

    }

    console.table([

        {
            indice: juge.indice,
            Categoria_Estrella: juge.contenidojusg.Nombre_servicio,
            All_register: juge.contenidojusg.Registros_Totale
        },

    ])

}

export function parQueSuma(datos, objetivo) {
    //By Juan-cuartas
    if (objetivo === null || objetivo === undefined) {
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

export function DelLastPrint(){  

    let Reflex= new Map()

    let cluster= Array.from(serviciosHistoricos.values())  

    let indic= cluster.length -1 
    
    let locFite= cluster.filter((Record, ragnar)=> ragnar == indic)   

    Reflex.set(indic,{ 
        
        ID_Vehiculo: locFite[0].ID_Vehiculo, 
        ID_TipoServicio: locFite[0].ID_TipoServicio, 
        Fecha: locFite[0].Fecha, 
        Observaciones: locFite[0].Observaciones, 
        Monto:locFite[0].Monto

    }) 

    let irmm= Array.from(Reflex,([darius, draven]) => ({

        Ireges:darius, 
        ...draven
    }))

    console.table(irmm)

    serviciosHistoricos.delete(indic)

}