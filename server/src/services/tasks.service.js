const pool = require('../config/db')

const obtenerTodas = async () => {
  const { rows } = await pool.query('SELECT * FROM tasks ORDER BY id DESC')
  return rows
}

const crearTarea = async (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const { rows } = await pool.query(
    'INSERT INTO tasks (title, description, category, completed, deadline, "createdAt") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [data.title, data.description || '', data.category || 'Personal', false, data.deadline || null, createdAt]
  )
  return rows[0]
}

const actualizarTarea = async (id, data) => {
  const existing = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  if (!existing.rows[0]) throw new Error('NOT_FOUND')

  const tarea = existing.rows[0]
  const title = data.title !== undefined ? data.title : tarea.title
  const description = data.description !== undefined ? data.description : tarea.description
  const category = data.category !== undefined ? data.category : tarea.category
  const completed = data.completed !== undefined ? data.completed : tarea.completed
  const deadline = data.deadline !== undefined ? data.deadline : tarea.deadline

  const { rows } = await pool.query(
    'UPDATE tasks SET title = $1, description = $2, category = $3, completed = $4, deadline = $5 WHERE id = $6 RETURNING *',
    [title, description, category, completed, deadline, id]
  )
  return rows[0]
}

const eliminarTarea = async (id) => {
  const existing = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  if (!existing.rows[0]) throw new Error('NOT_FOUND')
  await pool.query('DELETE FROM tasks WHERE id = $1', [id])
}

module.exports = { obtenerTodas, crearTarea, actualizarTarea, eliminarTarea }