const pool = require('../config/db')

/**
 * Devuelve todas las notas
 */
const obtenerTodas = async () => {
  const [rows] = await pool.query('SELECT * FROM notes ORDER BY id DESC')
  return rows
}

/**
 * Crea una nota nueva
 */
const crearNota = async (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const [result] = await pool.query(
    'INSERT INTO notes (title, content, category, createdAt) VALUES (?, ?, ?, ?)',
    [data.title, data.content || '', data.category || 'Personal', createdAt]
  )
  const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [result.insertId])
  return rows[0]
}

/**
 * Actualiza una nota existente
 */
const actualizarNota = async (id, data) => {
  const [existing] = await pool.query('SELECT * FROM notes WHERE id = ?', [id])
  if (!existing[0]) throw new Error('NOT_FOUND')

  const nota = existing[0]
  const title = data.title !== undefined ? data.title : nota.title
  const content = data.content !== undefined ? data.content : nota.content
  const category = data.category !== undefined ? data.category : nota.category

  await pool.query(
    'UPDATE notes SET title = ?, content = ?, category = ? WHERE id = ?',
    [title, content, category, id]
  )
  const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id])
  return rows[0]
}

/**
 * Elimina una nota por su id
 */
const eliminarNota = async (id) => {
  const [existing] = await pool.query('SELECT * FROM notes WHERE id = ?', [id])
  if (!existing[0]) throw new Error('NOT_FOUND')
  await pool.query('DELETE FROM notes WHERE id = ?', [id])
}

module.exports = { obtenerTodas, crearNota, actualizarNota, eliminarNota }