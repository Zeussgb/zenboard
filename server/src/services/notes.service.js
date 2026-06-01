const pool = require('../config/db')

const obtenerTodas = async () => {
  const { rows } = await pool.query('SELECT * FROM notes ORDER BY id DESC')
  return rows
}

const crearNota = async (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const { rows } = await pool.query(
    'INSERT INTO notes (title, content, category, "createdAt") VALUES ($1, $2, $3, $4) RETURNING *',
    [data.title, data.content || '', data.category || 'Personal', createdAt]
  )
  return rows[0]
}

const actualizarNota = async (id, data) => {
  const existing = await pool.query('SELECT * FROM notes WHERE id = $1', [id])
  if (!existing.rows[0]) throw new Error('NOT_FOUND')

  const nota = existing.rows[0]
  const title = data.title !== undefined ? data.title : nota.title
  const content = data.content !== undefined ? data.content : nota.content
  const category = data.category !== undefined ? data.category : nota.category

  const { rows } = await pool.query(
    'UPDATE notes SET title = $1, content = $2, category = $3 WHERE id = $4 RETURNING *',
    [title, content, category, id]
  )
  return rows[0]
}

const eliminarNota = async (id) => {
  const existing = await pool.query('SELECT * FROM notes WHERE id = $1', [id])
  if (!existing.rows[0]) throw new Error('NOT_FOUND')
  await pool.query('DELETE FROM notes WHERE id = $1', [id])
}

module.exports = { obtenerTodas, crearNota, actualizarNota, eliminarNota }