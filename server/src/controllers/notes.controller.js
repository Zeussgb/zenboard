const notesService = require('../services/notes.service')

const getNotes = async (req, res, next) => {
  try {
    const notes = await notesService.obtenerTodas()
    res.status(200).json(notes)
  } catch (error) {
    next(error)
  }
}

const createNote = async (req, res, next) => {
  try {
    const { title, content, category } = req.body
    if (!title || typeof title !== 'string' || title.trim().length < 1) {
      return res.status(400).json({ error: 'El título es obligatorio' })
    }
    const nota = await notesService.crearNota({ title: title.trim(), content, category })
    res.status(201).json(nota)
  } catch (error) {
    next(error)
  }
}

const updateNote = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })
    const nota = await notesService.actualizarNota(id, req.body)
    res.status(200).json(nota)
  } catch (error) {
    next(error)
  }
}

const deleteNote = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })
    await notesService.eliminarNota(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = { getNotes, createNote, updateNote, deleteNote }