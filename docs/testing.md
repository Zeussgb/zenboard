# Testing de ZenBoard

## Pruebas manuales realizadas

### Notas
| Prueba | Resultado |
|--------|-----------|
| Crear nota con título, contenido y categoría | ✅ OK |
| Editar nota existente | ✅ OK |
| Borrar nota | ✅ OK |
| Buscar nota por título | ✅ OK |
| Filtrar notas por categoría | ✅ OK |

### Tareas
| Prueba | Resultado |
|--------|-----------|
| Crear tarea con título, descripción, categoría y fecha límite | ✅ OK |
| Editar tarea existente | ✅ OK |
| Marcar tarea como completada | ✅ OK |
| Borrar tarea | ✅ OK |
| Buscar tarea por título | ✅ OK |
| Filtrar tareas por categoría | ✅ OK |

### Navegación
| Prueba | Resultado |
|--------|-----------|
| Ir a Notas desde el inicio | ✅ OK |
| Ir a Tareas desde el inicio | ✅ OK |
| Volver al inicio clickando en ZenBoard | ✅ OK |
| URL inexistente muestra página 404 | ✅ OK |

### Persistencia
| Prueba | Resultado |
|--------|-----------|
| Los datos persisten al reiniciar el servidor | ✅ OK |
| Los datos se guardan correctamente en SQLite | ✅ OK |