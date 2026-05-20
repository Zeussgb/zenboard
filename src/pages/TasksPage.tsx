import { useState } from 'react'
import { useTasks } from '../context/TasksContext'
import useSearch from '../hooks/useSearch'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import type { Task, CreateTaskDTO } from '../types'

const CATEGORIES = ['Personal', 'Trabajo', 'Estudio', 'Hogar', 'Otro']

function TasksPage() {
  const { tasks, loading, error, addTask, editTask, toggleTaskCompleted, removeTask } = useTasks()
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const { searchText, setSearchText, selectedCategory, setSelectedCategory, filteredItems } =
    useSearch(tasks as unknown as Record<string, unknown>[], ['title', 'description'])

  const handleSubmit = async (data: CreateTaskDTO) => {
    if (editingTask) {
      await editTask(editingTask.id, data)
    } else {
      await addTask(data)
    }
    setShowForm(false)
    setEditingTask(null)
  }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingTask(null)
  }

  if (loading) return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <p className="text-gray-400 animate-pulse">Cargando tareas...</p>
    </div>
  )

  if (error) return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <p className="text-red-400">❌ {error}</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">✅ Mis tareas</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Nueva tarea
        </button>
      </div>

      {showForm && (
        <TaskForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          initialData={editingTask ?? undefined}
        />
      )}

      <SearchBar
        placeholder="Buscar tareas..."
        value={searchText}
        onChange={setSearchText}
      />

      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {filteredItems.length === 0 ? (
        <p className="text-gray-400 text-center mt-8">No hay tareas todavía. ¡Crea una!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(filteredItems as unknown as Task[]).map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={removeTask}
              onToggle={(id) => toggleTaskCompleted(id, !task.completed)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TasksPage