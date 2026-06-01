const db = require('../config/db')

/**
 * Devuelve todas las tareas
 */
const obtenerTodas = () => {
  return db.prepare('SELECT * FROM tasks ORDER BY id DESC').all()
}

/**
 * Crea una tarea nueva
 */
const crearTarea = (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const result = db.prepare(
    'INSERT INTO tasks (title, description, category, completed, deadline, createdAt) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(data.title, data.description || '', data.category || 'Personal', 0, data.deadline || null, createdAt)

  return db.prepare('SELECT * FROM tasks WHERE id = ?').get(result.lastInsertRowid)
}

/**
 * Actualiza una tarea existente
 */
const actualizarTarea = (id, data) => {
  const tarea = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
  if (!tarea) throw new Error('NOT_FOUND')

  const title = data.title !== undefined ? data.title : tarea.title
  const description = data.description !== undefined ? data.description : tarea.description
  const category = data.category !== undefined ? data.category : tarea.category
  const completed = data.completed !== undefined ? (data.completed ? 1 : 0) : tarea.completed
  const deadline = data.deadline !== undefined ? data.deadline : tarea.deadline

  db.prepare(
    'UPDATE tasks SET title = ?, description = ?, category = ?, completed = ?, deadline = ? WHERE id = ?'
  ).run(title, description, category, completed, deadline, id)

  const tarea_actualizada = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
  return { ...tarea_actualizada, completed: tarea_actualizada.completed === 1 }
}

/**
 * Elimina una tarea por su id
 */
const eliminarTarea = (id) => {
  const tarea = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id)
  if (!tarea) throw new Error('NOT_FOUND')
  db.prepare('DELETE FROM tasks WHERE id = ?').run(id)
}

module.exports = { obtenerTodas, crearTarea, actualizarTarea, eliminarTarea }