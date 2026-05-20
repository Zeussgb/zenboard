# Context API en ZenBoard

## ¿Qué es Context API?
Context API es una herramienta de React que permite compartir
estado entre componentes sin tener que pasar props de padre a
hijo manualmente. Es útil cuando varios componentes necesitan
acceder a los mismos datos.

## ¿Cuándo es útil usar Context?
Es útil cuando tienes datos que necesitan varios componentes
que no están directamente relacionados entre sí. Por ejemplo
en ZenBoard, tanto la página de notas como la barra de navegación
podrían necesitar saber cuántas notas hay.

Sin Context habría que pasar los datos de componente en componente
hasta llegar al que los necesita, lo que se llama "prop drilling"
y hace el código difícil de mantener.

## Contextos implementados

### NotesContext
Gestiona el estado global de las notas. Proporciona:
- `notes` — Lista de todas las notas
- `loading` — true mientras carga las notas de la API
- `error` — Mensaje de error si algo falla
- `addNote` — Crea una nota nueva en la API y actualiza el estado
- `editNote` — Edita una nota en la API y actualiza el estado
- `removeNote` — Borra una nota en la API y actualiza el estado

### TasksContext
Gestiona el estado global de las tareas. Proporciona:
- `tasks` — Lista de todas las tareas
- `loading` — true mientras carga las tareas de la API
- `error` — Mensaje de error si algo falla
- `addTask` — Crea una tarea nueva
- `editTask` — Edita una tarea existente
- `toggleTaskCompleted` — Marca una tarea como completada o pendiente
- `removeTask` — Borra una tarea

## Cómo se consume el contexto
Cada contexto exporta un hook personalizado (`useNotes` y `useTasks`)
que simplifica su uso. En vez de importar el contexto y useContext
en cada componente, simplemente se llama al hook:

```tsx
// En cualquier componente dentro del Provider
const { notes, addNote } = useNotes()
```