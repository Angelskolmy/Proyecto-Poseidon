import {
    serviciosHistoricos,
    vehiculos,
    prompts

} from "./Db._dicionarios.js";


import {
    filtrarXdatos,
    categoriaEstrella,
    mostrarRegistro,
    listarTodo,
    totalGeneral,
    promedio,
    registroMayor,
    totalesPorCategoria,
    personasUnicas,
    recurrentesLento,
    recurrentesRapido,
    parQueSuma,
    DelLastPrint,
    agregarRegistro
} from "./AnalisisSetMap.js"

let lista_registros = listarTodo(serviciosHistoricos);

const pilaRegistros = [{ estado: "Estado anterior" }];
const nuevoRegistro = { estado: "Nuevo estado" };

while (true) {
    console.log("Seleccione una de las opciones: ")
    console.table([
        { Columna_1: "-1 Filtro por categoria", Columna_2: "-7 Total por categoría" },
        { Columna_1: "-2 Categoria con mas venta", Columna_2: "-8 Personas únicas" },
        { Columna_1: "-3 Mostrar lista", Columna_2: "-9 Recurrentes lentos" },
        { Columna_1: "-4 Total general", Columna_2: "-10 Recurrentes rápidos" },
        { Columna_1: "-5 Promedio general", Columna_2: "-11 Pares de mismo valor" },
        { Columna_1: "-6 Registro mayor", Columna_2: "-0 Cerrar programa" },
        { Columna_1: "-12 Eliminar ultimo registro (PILA)", Columna_2: "-13 Agregar registro (PILA)" }

    ]);


    let opMotorLogico

    while (true) {

        opMotorLogico = Number(prompts("Ingrese numero de opcion deseada "))

        if (opMotorLogico < 0 || opMotorLogico > 13 || !Number.isInteger(opMotorLogico)) {
            console.log("opcion inexistente")
            continue
        }

        break

    }


    if (opMotorLogico == 1) {
        filtrarXdatos()
        continue
    }

    else if (opMotorLogico == 2) {
        categoriaEstrella()
        continue
    }
    else if (opMotorLogico == 3) {
        mostrarRegistro(lista_registros);
        continue
    }
    else if (opMotorLogico == 4) {
        console.log("||---------------- Tabla: Total General ----------------||");
        console.table({ "Total general": totalGeneral(serviciosHistoricos) });
        continue
    }
    else if (opMotorLogico == 5) {
        console.table(promedio(serviciosHistoricos));
        continue
    }
    else if (opMotorLogico == 6) {
        console.table(registroMayor(lista_registros));
        continue
    }

    else if (opMotorLogico == 7) {
        console.table(totalesPorCategoria(lista_registros));
        continue
    }

    else if (opMotorLogico == 8) {
        console.table(personasUnicas(vehiculos));
        continue
    }
    else if (opMotorLogico == 9) {
        console.table(recurrentesLento(serviciosHistoricos));
        continue
    }

    else if (opMotorLogico == 10) {
        console.table(recurrentesRapido(serviciosHistoricos));
        continue
    }

    else if (opMotorLogico == 11) {
        console.table(parQueSuma(lista_registros));
        continue
    }

    else if (opMotorLogico == 12) {
        DelLastPrint()
        continue
    }
    else if (opMotorLogico == 13) {
        console.log(`Registro en la cima: `);
        console.table(pilaRegistros[pilaRegistros.length - 1]);
        console.log(`Pila después de agregar el registro: `);
        console.table(agregarRegistro(pilaRegistros, nuevoRegistro));
        continue
    }
    else if (opMotorLogico == 14) {
        continue
    }
    else if (opMotorLogico == 15) {
        continue
    }

    else if (opMotorLogico == 0) {
        break
    }

}