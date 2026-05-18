# Arquitectura de ZenBoard

## Componentes principales

### Reutilizables
- **Navbar** — Barra de navegación entre secciones
- **SearchBar** — Barra de búsqueda, recibe una función onSearch como prop
- **CategoryFilter** — Filtro de categorías, recibe categorías y onFilter como props

### Notas
- **NoteCard** — Muestra una nota con título, contenido y categoría
- **NoteForm** — Formulario para crear y editar notas

### Tareas
- **TaskCard** — Muestra una tarea con título, categoría, fecha límite y estado
- **TaskForm** — Formulario para crear y editar tareas

## Páginas
- **HomePage** — Pantalla de bienvenida con resumen
- **NotesPage** — Lista de notas con búsqueda y filtro por categoría
- **TasksPage** — Lista de tareas con búsqueda y filtro por categoría
- **NotFoundPage** — Página 404

## Gestión del estado
El estado global se gestiona con Context API:
- **NotesContext** — Lista de notas, función para añadir, editar y borrar
- **TasksContext** — Lista de tareas, función para añadir, editar, borrar y completar

## Diseño de la API REST

### Notas
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/v1/notes | Obtener todas las notas |
| POST | /api/v1/notes | Crear nota nueva |
| PUT | /api/v1/notes/:id | Editar nota existente |
| DELETE | /api/v1/notes/:id | Borrar nota |

### Tareas
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/v1/tasks | Obtener todas las tareas |
| POST | /api/v1/tasks | Crear tarea nueva |
| PUT | /api/v1/tasks/:id | Editar tarea existente |
| DELETE | /api/v1/tasks/:id | Borrar tarea |

## Flujo de datos

Usuario
↓
Componente React (página o componente)
↓
Context API (estado global)
↓
Cliente de API (src/api/client.ts)
↓
Servidor Express (server/)
↓
Servicio (lógica de negocio)
↓
Datos en memoria (array) → MySQL en el futuro

## Decisiones de arquitectura

- Se usa Context API en vez de Redux porque la app no es
  suficientemente compleja para necesitar Redux
- El cliente de API está separado en src/api/ para que los
  componentes no hagan fetch directamente
- El backend sigue arquitectura por capas igual que en la Fase 3
- Los datos que viven en el servidor (notas y tareas) no se
  guardan en LocalStorage, la API es la única fuente de verdad