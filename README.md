# El Motor del Barrio — Poseidón

**Negocio:** Lavadero de carros  
**Proyecto:** Motor de datos en JavaScript  
**Clan:** Ubuntu  
**Celúla:** Poseidón

## Descripción

El Motor del Barrio es un proyecto desarrollado en JavaScript que simula el funcionamiento de un lavadero de carros mediante un motor de datos ejecutado desde la terminal con Node.js.

El programa almacena registros de lavados y permite consultar información, generar reportes, identificar clientes recurrentes, organizar turnos de atención y gestionar registros mediante estructuras de datos.

El proyecto busca fortalecer los fundamentos de JavaScript, el razonamiento lógico y la comprensión de estructuras de datos y complejidad algorítmica.

## Análisis de complejidad (Big O)

| Función | Big O | Por qué |
| --- | --- | --- |
| `mostrarRegistro` | O(n) | Muestra todos los registros recibidos mediante `console.table`. |
| `listarTodo` | O(n) | Recorre los valores de la estructura y crea una copia en un nuevo array. |
| `totalGeneral` | O(n) | Recorre todos los servicios una sola vez para acumular sus montos. |
| `promedio` | O(n) | Ejecuta `totalGeneral`, que recorre todos los registros; el cálculo posterior es constante. |
| `registroMayor` | O(n) | Recorre los registros una vez para encontrar el monto más alto. |
| `filtrarXdatos` | O(c + n) | Recorre los tipos de servicio y los servicios históricos para construir y mostrar el resultado filtrado. |
| `totalesPorCategoria` | O(n) | Recorre todos los registros y acumula los montos según su categoría. |
| `personasUnicas` | O(n) | Recorre los vehículos y agrega sus teléfonos a un `Set` para evitar duplicados. |
| `recurrentesLento` | O(n²) | Por cada servicio vuelve a recorrer todos los servicios para contar las apariciones de cada vehículo. |
| `recurrentesRapido` | O(n) | Realiza un recorrido para contar las apariciones con un `Map` y otro para identificar los vehículos recurrentes. |
| `categoriaEstrella` | O(c × n) | Por cada categoría recorre todos los servicios históricos para contar sus registros. |
| `parQueSuma` | O(n) | Recorre todos los registros una sola vez para encontrar aquellos cuyo monto coincide con el objetivo. |
| `llegar` | O(1) | Realiza búsquedas por clave en `Map` y agrega una atención al final de la cola. |
| `atender` | O(n) | Utiliza `shift()` para retirar el primer elemento de la cola, lo que requiere desplazar los elementos restantes. |
| `mostrarCola` | O(n) | Obtiene y muestra todos los elementos de la cola. |
| `agregarRegistro` | O(1) | Agrega un registro al final del array mediante `push()` (complejidad amortizada). |
| `DelLastPrint` | O(n) | Convierte los servicios históricos en un array y utiliza `filter()` para localizar el último registro. |

## Comparación de eficiencia: Recurrentes lentos vs. rápidos

Se implementaron dos soluciones para identificar los vehículos que aparecen más de una vez en los servicios históricos.

### Análisis de operaciones con 36 registros

| Característica | `recurrentesLento` | `recurrentesRapido` |
| --- | ---: | ---: |
| Complejidad temporal | O(n²) | O(n) |
| Primer recorrido | 36 iteraciones | 36 iteraciones |
| Segundo recorrido | 1.296 iteraciones | Entre 1 y 36 iteraciones |
| Total de iteraciones principales | 1.296 internas + 36 externas | Entre 37 y 72 |
| Comparaciones de identificadores | 1.296 | 36 durante el conteo |

### ¿Por qué existe esta diferencia?

**`recurrentesLento` — O(n²)**

Por cada servicio realiza un nuevo recorrido sobre todos los servicios históricos para contar cuántas veces aparece el identificador del vehículo. Esto genera recorridos anidados.

**`recurrentesRapido` — O(n)**

Utiliza un `Map` para almacenar el número de apariciones de cada vehículo. Primero recorre los servicios para construir el conteo y después recorre las claves almacenadas para identificar los vehículos recurrentes.

### Conclusión

Con 36 registros, `recurrentesLento` realiza 1.296 comparaciones de identificadores, mientras que `recurrentesRapido` realiza 36 comparaciones durante el conteo y entre 1 y 36 iteraciones adicionales para identificar los vehículos recurrentes.

La segunda solución reduce considerablemente el trabajo gracias al uso de un `Map`, cuyas operaciones de consulta y actualización tienen un costo promedio O(1).

**Aprendizaje:** elegir una estructura de datos adecuada permite mejorar significativamente la eficiencia de un algoritmo.

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