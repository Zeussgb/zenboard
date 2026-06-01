const pool = require('../config/db')

/**
 * Devuelve todas las tareas
 */
const obtenerTodas = async () => {
  const [rows] = await pool.query('SELECT * FROM tasks ORDER BY id DESC')
  return rows
}

/**
 * Crea una tarea nueva
 */
const crearTarea = async (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const [result] = await pool.query(
    'INSERT INTO tasks (title, description, category, completed, deadline, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
    [data.title, data.description || '', data.category || 'Personal', false, data.deadline || null, createdAt]
  )
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId])
  return rows[0]
}

/**
 * Actualiza una tarea existente
 */
const actualizarTarea = async (id, data) => {
  const [existing] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
  if (!existing[0]) throw new Error('NOT_FOUND')

  const tarea = existing[0]
  const title = data.title !== undefined ? data.title : tarea.title
  const description = data.description !== undefined ? data.description : tarea.description
  const category = data.category !== undefined ? data.category : tarea.category
  const completed = data.completed !== undefined ? data.completed : tarea.completed
  const deadline = data.deadline !== undefined ? data.deadline : tarea.deadline

  await pool.query(
    'UPDATE tasks SET title = ?, description = ?, category = ?, completed = ?, deadline = ? WHERE id = ?',
    [title, description, category, completed, deadline, id]
  )
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
  return rows[0]
}

/**
 * Elimina una tarea por su id
 */
const eliminarTarea = async (id) => {
  const [existing] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
  if (!existing[0]) throw new Error('NOT_FOUND')
  await pool.query('DELETE FROM tasks WHERE id = ?', [id])
}

module.exports = { obtenerTodas, crearTarea, actualizarTarea, eliminarTarea }