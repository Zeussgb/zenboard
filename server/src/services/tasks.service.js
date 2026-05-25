let tasks = []
let nextId = 1

/**
 * Devuelve todas las tareas
 */
const obtenerTodas = () => tasks

/**
 * Crea una tarea nueva
 */
const crearTarea = (data) => {
  const tarea = {
    id: nextId++,
    title: data.title,
    description: data.description || '',
    category: data.category || 'Personal',
    completed: false,
    deadline: data.deadline || null,
    createdAt: new Date().toLocaleDateString('es-ES')
  }
  tasks.push(tarea)
  return tarea
}

/**
 * Actualiza una tarea existente
 */
const actualizarTarea = (id, data) => {
  const tarea = tasks.find(t => t.id === id)
  if (!tarea) throw new Error('NOT_FOUND')
  if (data.title !== undefined) tarea.title = data.title
  if (data.description !== undefined) tarea.description = data.description
  if (data.category !== undefined) tarea.category = data.category
  if (data.completed !== undefined) tarea.completed = data.completed
  if (data.deadline !== undefined) tarea.deadline = data.deadline
  return tarea
}

/**
 * Elimina una tarea por su id
 */
const eliminarTarea = (id) => {
  const index = tasks.findIndex(t => t.id === id)
  if (index === -1) throw new Error('NOT_FOUND')
  tasks.splice(index, 1)
}

module.exports = { obtenerTodas, crearTarea, actualizarTarea, eliminarTarea }