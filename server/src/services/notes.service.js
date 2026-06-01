const db = require('../config/db')

/**
 * Devuelve todas las notas
 */
const obtenerTodas = () => {
  return db.prepare('SELECT * FROM notes ORDER BY id DESC').all()
}

/**
 * Crea una nota nueva
 */
const crearNota = (data) => {
  const createdAt = new Date().toLocaleDateString('es-ES')
  const result = db.prepare(
    'INSERT INTO notes (title, content, category, createdAt) VALUES (?, ?, ?, ?)'
  ).run(data.title, data.content || '', data.category || 'Personal', createdAt)

  return db.prepare('SELECT * FROM notes WHERE id = ?').get(result.lastInsertRowid)
}

/**
 * Actualiza una nota existente
 */
const actualizarNota = (id, data) => {
  const nota = db.prepare('SELECT * FROM notes WHERE id = ?').get(id)
  if (!nota) throw new Error('NOT_FOUND')

  const title = data.title !== undefined ? data.title : nota.title
  const content = data.content !== undefined ? data.content : nota.content
  const category = data.category !== undefined ? data.category : nota.category

  db.prepare(
    'UPDATE notes SET title = ?, content = ?, category = ? WHERE id = ?'
  ).run(title, content, category, id)

  return db.prepare('SELECT * FROM notes WHERE id = ?').get(id)
}

/**
 * Elimina una nota por su id
 */
const eliminarNota = (id) => {
  const nota = db.prepare('SELECT * FROM notes WHERE id = ?').get(id)
  if (!nota) throw new Error('NOT_FOUND')
  db.prepare('DELETE FROM notes WHERE id = ?').run(id)
}

module.exports = { obtenerTodas, crearNota, actualizarNota, eliminarNota }