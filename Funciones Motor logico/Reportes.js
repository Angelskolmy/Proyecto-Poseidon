import {
    serviciosHistoricos,
    vehiculos,
    tipoServicio,
    prompts,

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
    parQueSuma
} from "./AnalisisSetMap.js"

let lista_registros = listarTodo(serviciosHistoricos);


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
console.log("||---------------- Tabla: Total General ----------------||");
console.table({ "Total general": totalGeneral(serviciosHistoricos) });
console.table(personasUnicas(vehiculos));

//Funciones: Angel - Pendiente.
filtrarXdatos();
categoriaEstrella();

// __________________Pruebas con Arrays vacíos_____________________________//
console.log ("")
console.log ("||-----------------------------------||")
console.log ("||Pruebas de error con arrays vacíos.||")
console.log ("||-----------------------------------||")
console.log ("");
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