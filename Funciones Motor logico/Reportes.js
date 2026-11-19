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