# Componentes de ZenBoard

## Componentes reutilizables

### Navbar
Barra de navegación principal. Muestra el nombre de la app y los
enlaces a las páginas de Notas y Tareas. Resalta el enlace de la
página activa.

### SearchBar
Barra de búsqueda reutilizable. Recibe un placeholder, el valor
actual y una función onChange como props.

**Props:**
- `placeholder: string` — Texto de ayuda del input
- `value: string` — Valor actual del input
- `onChange: (value: string) => void` — Función que se llama al escribir

### CategoryFilter
Filtro de categorías reutilizable. Muestra un botón "Todas" y uno
por cada categoría disponible.

**Props:**
- `categories: string[]` — Lista de categorías disponibles
- `selected: string` — Categoría seleccionada actualmente
- `onSelect: (category: string) => void` — Función que se llama al seleccionar

## Componentes de Notas

### NoteCard
Tarjeta que muestra una nota con su título, contenido, categoría
y fecha de creación. Incluye botones de editar y borrar.

**Props:**
- `note: Note` — La nota a mostrar
- `onEdit: (note: Note) => void` — Función para editar
- `onDelete: (id: number) => void` — Función para borrar

### NoteForm
Formulario para crear y editar notas. Si recibe `initialData`
entra en modo edición. Valida que el título no esté vacío.

**Props:**
- `onSubmit: (data: CreateNoteDTO) => void` — Función al enviar
- `onCancel: () => void` — Función al cancelar
- `initialData?: Note` — Datos iniciales para modo edición

## Componentes de Tareas

### TaskCard
Tarjeta que muestra una tarea con su título, descripción,
categoría, fecha límite y estado. Incluye checkbox para
completar y botones de editar y borrar.

**Props:**
- `task: Task` — La tarea a mostrar
- `onEdit: (task: Task) => void` — Función para editar
- `onDelete: (id: number) => void` — Función para borrar
- `onToggle: (id: number) => void` — Función para completar/descompletar

### TaskForm
Formulario para crear y editar tareas. Incluye campo de fecha
límite opcional. Si recibe `initialData` entra en modo edición.

**Props:**
- `onSubmit: (data: CreateTaskDTO) => void` — Función al enviar
- `onCancel: () => void` — Función al cancelar
- `initialData?: Task` — Datos iniciales para modo edición