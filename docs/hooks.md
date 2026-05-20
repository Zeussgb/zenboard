# Hooks de ZenBoard

## Custom hooks

### useSearch
Hook reutilizable para filtrar una lista por texto y categoría.

**¿Por qué es útil?**
La lógica de búsqueda y filtrado es la misma para notas y tareas.
En vez de repetir el código en cada página, este hook lo centraliza
y se puede reutilizar en cualquier componente.

**¿Qué devuelve?**
- `searchText` — Texto de búsqueda actual
- `setSearchText` — Función para actualizar el texto
- `selectedCategory` — Categoría seleccionada
- `setSelectedCategory` — Función para cambiar la categoría
- `filteredItems` — Lista filtrada por texto y categoría

### useApi
Hook para gestionar los tres estados de una petición a la API:
carga, éxito y error.

**¿Por qué es útil?**
Cada vez que se hace una petición al servidor hay que gestionar
tres estados: mientras carga, cuando termina bien y cuando falla.
Sin este hook habría que repetir ese código en cada componente.

**¿Qué devuelve?**
- `data` — Los datos recibidos de la API
- `isLoading` — true mientras espera respuesta
- `isError` — true si hubo un error
- `isSuccess` — true si todo fue bien
- `error` — Mensaje de error si lo hay
- `execute` — Función para ejecutar la petición

## Hooks de React utilizados

### useState
Gestiona el estado local de los componentes. Se usa en los
formularios para controlar los inputs y en las páginas para
guardar la lista de notas y tareas.

### useEffect
Gestiona efectos secundarios. Se usa para cargar las notas y
tareas desde la API cuando se monta una página.

### useMemo
Optimiza cálculos costosos. Se usa en `useSearch` para no
recalcular el filtrado en cada render si los datos no han cambiado.

### useCallback
Evita que las funciones se recreen en cada render. Se usa en
`useApi` para que la función `execute` sea estable.