//export const prompts= require('prompt-sync')();  
import promptSync from 'prompt-sync'; //Si se está usando ES Modules (import y export) usar require  
export const prompts = promptSync(); //genera conflicto en las importaciones de los modulos, por tal razon se deja comentado y se importa con el método ES Modules. 

export const serviciosHistoricos = new Map([
    // Angel
    ["AD123", {
        ID_Vehiculo: "ABC123",
        ID_TipoServicio: 1,
        Fecha: "2026-11-01",
        Observaciones: "Servicio realizado correctamente",
        Monto: 35000
    }],
    ["AD124", {
        ID_Vehiculo: "XYZ789",
        ID_TipoServicio: 2,
        Fecha: "2026-11-01",
        Observaciones: "Lavado sencillo",
        Monto: 15000
    }],
    ["AD125", {
        ID_Vehiculo: "DEF456",
        ID_TipoServicio: 3,
        Fecha: "2026-11-02",
        Observaciones: "Lavado completo",
        Monto: 25000
    }],
    ["AD126", {
        ID_Vehiculo: "GHI789",
        ID_TipoServicio: 4,
        Fecha: "2026-11-02",
        Observaciones: "Encerado de carrocería",
        Monto: 40000
    }],
    ["AD127", {
        ID_Vehiculo: "JKL123",
        ID_TipoServicio: 1,
        Fecha: "2026-11-03",
        Observaciones: "Polichada general",
        Monto: 35000
    }],
    ["AD128", {
        ID_Vehiculo: "MNO456",
        ID_TipoServicio: 2,
        Fecha: "2026-11-03",
        Observaciones: "Lavado exterior",
        Monto: 15000
    }],
    ["AD129", {
        ID_Vehiculo: "PQR789",
        ID_TipoServicio: 3,
        Fecha: "2026-11-04",
        Observaciones: "Limpieza interior y exterior",
        Monto: 25000
    }],
    ["AD130", {
        ID_Vehiculo: "STU123",
        ID_TipoServicio: 4,
        Fecha: "2026-11-04",
        Observaciones: "Encerado completo",
        Monto: 40000
    }],
    ["AD131", {
        ID_Vehiculo: "VWX456",
        ID_TipoServicio: 1,
        Fecha: "2026-11-05",
        Observaciones: "Polichada de pintura",
        Monto: 35000
    }],
    ["AD132", {
        ID_Vehiculo: "YZA789",
        ID_TipoServicio: 2,
        Fecha: "2026-11-05",
        Observaciones: "Lavado sencillo de moto",
        Monto: 15000
    }],
    ["AD133", {
        ID_Vehiculo: "BCD123",
        ID_TipoServicio: 3,
        Fecha: "2026-11-06",
        Observaciones: "Lavado completo de carro",
        Monto: 25000
    }],
    ["AD134", {
        ID_Vehiculo: "ABC123",
        ID_TipoServicio: 4,
        Fecha: "2026-11-06",
        Observaciones: "Encerado de carrocería",
        Monto: 40000
    }],
    ["AD135", {
        ID_Vehiculo: "XYZ789",
        ID_TipoServicio: 1,
        Fecha: "2026-11-07",
        Observaciones: "Polichada general",
        Monto: 35000
    }],
    ["AD136", {
        ID_Vehiculo: "DEF456",
        ID_TipoServicio: 2,
        Fecha: "2026-11-07",
        Observaciones: "Lavado sencillo",
        Monto: 15000
    }],
    ["AD137", {
        ID_Vehiculo: "GHI789",
        ID_TipoServicio: 3,
        Fecha: "2026-11-08",
        Observaciones: "Lavado completo",
        Monto: 25000
    }],
    ["AD138", {
        ID_Vehiculo: "JKL123",
        ID_TipoServicio: 4,
        Fecha: "2026-11-08",
        Observaciones: "Encerado general",
        Monto: 40000
    }],
    ["AD139", {
        ID_Vehiculo: "MNO456",
        ID_TipoServicio: 1,
        Fecha: "2026-11-09",
        Observaciones: "Polichada de pintura",
        Monto: 35000
    }],
    ["AD140", {
        ID_Vehiculo: "PQR789",
        ID_TipoServicio: 2,
        Fecha: "2026-11-09",
        Observaciones: "Lavado exterior",
        Monto: 15000
    }],
    ["AD141", {
        ID_Vehiculo: "STU123",
        ID_TipoServicio: 3,
        Fecha: "2026-11-10",
        Observaciones: "Lavado completo",
        Monto: 25000
    }],
    ["AD142", {
        ID_Vehiculo: "VWX456",
        ID_TipoServicio: 4,
        Fecha: "2026-11-10",
        Observaciones: "Encerado de carrocería",
        Monto: 40000
    }],
    ["AD143", {
        ID_Vehiculo: "YZA789",
        ID_TipoServicio: 1,
        Fecha: "2026-11-11",
        Observaciones: "Polichada general",
        Monto: 35000
    }],
    ["AD144", {
        ID_Vehiculo: "BCD123",
        ID_TipoServicio: 2,
        Fecha: "2026-11-11",
        Observaciones: "Lavado sencillo",
        Monto: 15000
    }],
    ["AD145", {
        ID_Vehiculo: "ABC123",
        ID_TipoServicio: 3,
        Fecha: "2026-11-12",
        Observaciones: "Lavado completo",
        Monto: 25000
    }],
    ["AD146", {
        ID_Vehiculo: "XYZ789",
        ID_TipoServicio: 4,
        Fecha: "2026-11-12",
        Observaciones: "Encerado completo",
        Monto: 40000
    }], 
    ["AD147", {
        ID_Vehiculo: "ABC123",
        ID_TipoServicio: 1,
        Fecha: "2026-11-13",
        Observaciones: "Polichada general",
        Monto: 35000
    }],
    ["AD148", {
        ID_Vehiculo: "XYZ789",
        ID_TipoServicio: 1,
        Fecha: "2026-11-14",
        Observaciones: "Polichada de pintura",
        Monto: 35000
    }],
    ["AD149", {
        ID_Vehiculo: "DEF456",
        ID_TipoServicio: 1,
        Fecha: "2026-11-15",
        Observaciones: "Polichada completa",
        Monto: 35000
    }],
    ["AD150", {
        ID_Vehiculo: "GHI789",
        ID_TipoServicio: 1,
        Fecha: "2026-11-16",
        Observaciones: "Polichada general",
        Monto: 35000
    }],
    ["AD151", {
        ID_Vehiculo: "JKL123",
        ID_TipoServicio: 2,
        Fecha: "2026-11-17",
        Observaciones: "Lavada sencilla de moto",
        Monto: 15000
    }],
    ["AD152", {
        ID_Vehiculo: "MNO456",
        ID_TipoServicio: 2,
        Fecha: "2026-11-18",
        Observaciones: "Lavada sencilla exterior",
        Monto: 15000
    }],
    ["AD153", {
        ID_Vehiculo: "PQR789",
        ID_TipoServicio: 2,
        Fecha: "2026-11-19",
        Observaciones: "Lavada sencilla de camioneta",
        Monto: 15000
    }],
    ["AD154", {
        ID_Vehiculo: "STU123",
        ID_TipoServicio: 3,
        Fecha: "2026-11-20",
        Observaciones: "Lavada completa",
        Monto: 25000
    }],
    ["AD155", {
        ID_Vehiculo: "VWX456",
        ID_TipoServicio: 3,
        Fecha: "2026-11-21",
        Observaciones: "Lavada completa de carro",
        Monto: 25000
    }],
    ["AD156", {
        ID_Vehiculo: "YZA789",
        ID_TipoServicio: 3,
        Fecha: "2026-11-22",
        Observaciones: "Lavada completa de moto",
        Monto: 25000
    }],
    ["AD157", {
        ID_Vehiculo: "BCD123",
        ID_TipoServicio: 4,
        Fecha: "2026-11-23",
        Observaciones: "Encerado de carrocería",
        Monto: 40000
    }],
    ["AD158", {
        ID_Vehiculo: "EFG456",
        ID_TipoServicio: 4,
        Fecha: "2026-11-24",
        Observaciones: "Encerado completo",
        Monto: 40000
    }],
]);



export const vehiculos = new Map([
     // Angel
    ["ABC123", {
        Tipo: "Carro",
        Numero_Tel: "3001234567"
    }],
    ["XYZ789", {
        Tipo: "Moto",
        Numero_Tel: "3109876543"
    }],
    ["DEF456", {
        Tipo: "Camioneta",
        Numero_Tel: "3124567890"
    }],
    ["GHI789", {
        Tipo: "Carro",
        Numero_Tel: "3156789012"
    }],
    ["JKL123", {
        Tipo: "Moto",
        Numero_Tel: "3009876543"
    }],
    ["MNO456", {
        Tipo: "Carro",
        Numero_Tel: "3112345678"
    }],
    ["PQR789", {
        Tipo: "Camioneta",
        Numero_Tel: "3145678901"
    }],
    ["STU123", {
        Tipo: "Moto",
        Numero_Tel: "3167890123"
    }],
    ["VWX456", {
        Tipo: "Carro",
        Numero_Tel: "3181234567"
    }],
    ["YZA789", {
        Tipo: "Moto",
        Numero_Tel: "3204567890"
    }],
    ["BCD123", {
        Tipo: "Carro",
        Numero_Tel: "3015678901"
    }],
    ["EFG456", {
        Tipo: "Camioneta",
        Numero_Tel: "3178901234"
    }]
]);


export const tipoServicio = new Map([
     // Angel
    [1, {
        Tipo_Serv: "Polichada",
        Precio_Serv: 35000
    }],
    [2, {
        Tipo_Serv: "Lavada sencilla",
        Precio_Serv: 15000
    }],
    [3, {
        Tipo_Serv: "Lavada completa",
        Precio_Serv: 25000
    }],
    [4, {
        Tipo_Serv: "Encerado",
        Precio_Serv: 40000
    }]
]); 


