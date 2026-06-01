const tasksService = require('../services/tasks.service')

const getTasks = async (req, res, next) => {
  try {
    const tasks = await tasksService.obtenerTodas()
    res.status(200).json(tasks)
  } catch (error) {
    next(error)
  }
}

const createTask = async (req, res, next) => {
  try {
    const { title, description, category, deadline } = req.body
    if (!title || typeof title !== 'string' || title.trim().length < 1) {
      return res.status(400).json({ error: 'El título es obligatorio' })
    }
    const tarea = await tasksService.crearTarea({ title: title.trim(), description, category, deadline })
    res.status(201).json(tarea)
  } catch (error) {
    next(error)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })
    const tarea = await tasksService.actualizarTarea(id, req.body)
    res.status(200).json(tarea)
  } catch (error) {
    next(error)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })
    await tasksService.eliminarTarea(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = { getTasks, createTask, updateTask, deleteTask }