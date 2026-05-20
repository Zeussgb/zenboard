# Formularios de ZenBoard

## Formularios implementados

### NoteForm
Formulario controlado para crear y editar notas.

**Campos:**
- `title` — Texto obligatorio, mínimo 1 carácter
- `content` — Texto opcional, área de texto
- `category` — Selector con opciones predefinidas

**Comportamiento:**
- Si recibe `initialData` entra en modo edición y rellena
  los campos con los datos existentes
- Al enviar llama a `onSubmit` con los datos del formulario
- Al cancelar llama a `onCancel` y cierra el formulario
- Valida que el título no esté vacío antes de enviar

### TaskForm
Formulario controlado para crear y editar tareas.

**Campos:**
- `title` — Texto obligatorio, mínimo 1 carácter
- `description` — Texto opcional, área de texto
- `category` — Selector con opciones predefinidas
- `deadline` — Campo de fecha opcional

**Comportamiento:**
- Si recibe `initialData` entra en modo edición
- La fecha límite es opcional, si no se rellena se guarda como null
- Al enviar llama a `onSubmit` con los datos del formulario
- Valida que el título no esté vacío antes de enviar

## Formularios controlados en React
En React un formulario controlado es aquel donde el estado
de cada input está gestionado por `useState`. Cada vez que
el usuario escribe, se actualiza el estado y React vuelve a
renderizar el input con el nuevo valor.

Esto permite validar los datos en tiempo real y tener control
total sobre el contenido del formulario en todo momento.