# El Motor del Barrio — Poseidon

**Negocio:** Lavadero de carros  
**Proyecto:** Motor de datos en JavaScript  
**Clan:** RIWI

## Descripción

El Motor del Barrio es un proyecto desarrollado en JavaScript que simula el funcionamiento de un lavadero de carros mediante un motor de datos ejecutado desde la terminal con Node.js.

El programa almacena registros de lavados y permite consultar información, generar reportes, identificar clientes recurrentes, organizar turnos de atención y gestionar registros mediante estructuras de datos.

El proyecto busca fortalecer los fundamentos de JavaScript, el razonamiento lógico y la comprensión de estructuras de datos y complejidad algorítmica.

## Funcionalidades

### Nivel 1 — Datos
- Almacenamiento de registros de lavados.
- Visualización individual de registros.
- Listado completo de operaciones.

### Nivel 2 — Reportes
- Cálculo del total general de ingresos.
- Cálculo del promedio por lavado.
- Identificación del lavado de mayor valor.
- Filtrado de registros por tipo de lavado.
- Cálculo de ingresos por categoría.

### Nivel 3 — Set y Map
- Identificación de clientes únicos.
- Búsqueda de clientes recurrentes mediante dos ciclos.
- Búsqueda optimizada de clientes recurrentes utilizando Set o Map.
- Identificación del tipo de lavado más solicitado.
- Búsqueda de dos registros cuyos valores sumen un objetivo determinado.

### Nivel 4 — Estructuras de datos
- **Cola:** organización de turnos de atención mediante FIFO.
- **Pila:** historial de registros con posibilidad de deshacer la última operación mediante LIFO.

### Nivel 5 — Complejidad algorítmica
- Análisis de complejidad Big O.
- Comparación de eficiencia entre algoritmos.
- Contabilización de pasos en la búsqueda de clientes recurrentes. 

## Modelo de datos

Se define la estructura de la DB por medio de diccionarios relacionados, simulando FK y PK, SQL.

## 🛠️ Tecnologías

- JavaScript (ES6+)
- Node.js
- Git
- GitHub

## 🚀 Ejecución
- node IndexPoseidon.js

### Requisitos
- Node.js instalado.
- Git instalado.

### Clonar repositorio

```bash
git clone https://github.com/Angelskolmy/Proyecto-Poseidon
```

### Ejecutar el motor

```bash
node IndexPoseidon.js
```

## 📚 Conceptos aplicados

- Variables y funciones.
- Arreglos y objetos.
- Ciclos `for` y `while`.
- Condicionales.
- Métodos y estructuras de datos `Set` y `Map`.
- Pilas y colas.
- Modularidad y reutilización de código.
- Complejidad algorítmica (Big O). 

**Restricción del proyecto:** los recorridos deben implementarse manualmente, sin utilizar `filter`, `map`, `reduce`, `sort` ni `includes`.

## 📌 Estado del proyecto

En desarrollo — Proyecto académico de RIWI.

## 👥 Integrantes

- [Lauren Taborda]
- [Angel Augusto Bernal Zárate]
- [Jhoimar Fernando Osorio Obando]
- [Juan Cuartas]