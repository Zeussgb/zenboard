const tasksService = require('../services/tasks.service')

const getTasks = (req, res) => {
  const tasks = tasksService.obtenerTodas()
  res.status(200).json(tasks)
}

const createTask = (req, res, next) => {
  try {
    const { title, description, category, deadline } = req.body

    if (!title || typeof title !== 'string' || title.trim().length < 1) {
      return res.status(400).json({ error: 'El título es obligatorio' })
    }

    const tarea = tasksService.crearTarea({ title: title.trim(), description, category, deadline })
    res.status(201).json(tarea)
  } catch (error) {
    next(error)
  }
}

const updateTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })

    const tarea = tasksService.actualizarTarea(id, req.body)
    res.status(200).json(tarea)
  } catch (error) {
    next(error)
  }
}

const deleteTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: 'El id debe ser un número' })

    tasksService.eliminarTarea(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = { getTasks, createTask, updateTask, deleteTask }