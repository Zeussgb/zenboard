# Capa de red — ZenBoard

## Cliente de API

La comunicación entre el frontend y el backend se gestiona mediante
dos archivos en `src/api/`:

- `notesApi.ts` — Funciones para interactuar con `/api/v1/notes`
- `tasksApi.ts` — Funciones para interactuar con `/api/v1/tasks`

## Funciones implementadas

### notesApi.ts
| Función | Método | Endpoint | Descripción |
|---------|--------|----------|-------------|
| `getNotes()` | GET | `/api/v1/notes` | Obtiene todas las notas |
| `createNote(data)` | POST | `/api/v1/notes` | Crea una nota nueva |
| `updateNote(id, data)` | PUT | `/api/v1/notes/:id` | Actualiza una nota |
| `deleteNote(id)` | DELETE | `/api/v1/notes/:id` | Elimina una nota |

### tasksApi.ts
| Función | Método | Endpoint | Descripción |
|---------|--------|----------|-------------|
| `getTasks()` | GET | `/api/v1/tasks` | Obtiene todas las tareas |
| `createTask(data)` | POST | `/api/v1/tasks` | Crea una tarea nueva |
| `updateTask(id, data)` | PUT | `/api/v1/tasks/:id` | Actualiza una tarea |
| `toggleTask(id, completed)` | PUT | `/api/v1/tasks/:id` | Marca como completada |
| `deleteTask(id)` | DELETE | `/api/v1/tasks/:id` | Elimina una tarea |

## Tipos de las respuestas

Todas las funciones devuelven datos tipados con TypeScript:
- `getNotes()` → `Promise<Note[]>`
- `createNote()` → `Promise<Note>`
- `updateNote()` → `Promise<Note>`
- `deleteNote()` → `Promise<void>`
- `getTasks()` → `Promise<Task[]>`
- `createTask()` → `Promise<Task>`
- `updateTask()` → `Promise<Task>`
- `toggleTask()` → `Promise<Task>`
- `deleteTask()` → `Promise<void>`

## Gestión de estados de red

Los tres estados de red se gestionan en los contextos:

- **Cargando** → `loading: true` mientras se espera respuesta
- **Éxito** → los datos se actualizan en el estado
- **Error** → `error: string` con el mensaje del problema

En las páginas se muestra visualmente cada estado:
- Cargando → mensaje animado "Cargando notas/tareas..."
- Error → mensaje en rojo con el error
- Éxito → se muestran los datos

## Contrato de tipos

Los tipos del frontend están alineados con lo que devuelve el backend:

```typescript
interface Note {
  id: number
  title: string
  content: string
  category: string
  createdAt: string
}

interface Task {
  id: number
  title: string
  description: string
  category: string
  completed: boolean
  deadline: string | null
  createdAt: string
}
```