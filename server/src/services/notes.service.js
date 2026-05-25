let notes = []
let nextId = 1

/**
 * Devuelve todas las notas
 */
const obtenerTodas = () => notes

/**
 * Crea una nota nueva
 */
const crearNota = (data) => {
  const nota = {
    id: nextId++,
    title: data.title,
    content: data.content || '',
    category: data.category || 'Personal',
    createdAt: new Date().toLocaleDateString('es-ES')
  }
  notes.push(nota)
  return nota
}

/**
 * Actualiza una nota existente
 */
const actualizarNota = (id, data) => {
  const nota = notes.find(n => n.id === id)
  if (!nota) throw new Error('NOT_FOUND')
  if (data.title !== undefined) nota.title = data.title
  if (data.content !== undefined) nota.content = data.content
  if (data.category !== undefined) nota.category = data.category
  return nota
}

/**
 * Elimina una nota por su id
 */
const eliminarNota = (id) => {
  const index = notes.findIndex(n => n.id === id)
  if (index === -1) throw new Error('NOT_FOUND')
  notes.splice(index, 1)
}

module.exports = { obtenerTodas, crearNota, actualizarNota, eliminarNota }