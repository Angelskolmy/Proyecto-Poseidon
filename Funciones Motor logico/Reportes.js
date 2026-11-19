import { serviciosHistoricos } from "./Db._dicionarios.js";
//console.table(serviciosHistoricos);
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

// ---------- NIVEL 2 · Reportes ----------
function registroMayor(datos) {
    let registros = datos;
    let mayorMonto = 0;
    let tableMayormonto = null;

    for (let i = 0; i < registros.length; i++) {
        if (mayorMonto < registros[i].Monto) {
            mayorMonto = registros[i].Monto
            tableMayormonto = registros[i];
        }
    }
    return tableMayormonto;
}

function totalesPorCategoria(datos) {
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

    return categorias;
}

mostrarRegistro(lista_registros);
console.table(registroMayor(lista_registros));
console.table(totalesPorCategoria(lista_registros));