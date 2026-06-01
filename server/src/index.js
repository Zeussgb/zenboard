const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const notesRoutes = require('./routes/notes.routes')
const tasksRoutes = require('./routes/tasks.routes')

const app = express()

// MIDDLEWARES GLOBALES
app.use(cors())
app.use(express.json())

// Middleware de auditoría
app.use((req, res, next) => {
  const inicio = Date.now()
  res.on('finish', () => {
    console.log(`[${req.method}] ${req.originalUrl} - ${res.statusCode} (${Date.now() - inicio}ms)`)
  })
  next()
})

// RUTAS
app.use('/api/v1/notes', notesRoutes)
app.use('/api/v1/tasks', tasksRoutes)

// MIDDLEWARE DE ERRORES
app.use((err, req, res, next) => {
  if (err.message === 'NOT_FOUND') {
    return res.status(404).json({ error: 'Recurso no encontrado' })
  }
  console.error(err)
  res.status(500).json({ error: 'Error interno del servidor' })
})

// ARRANQUE
app.listen(PORT, () => {
  console.log(`Servidor ZenBoard arrancado en http://localhost:${PORT}`)
})