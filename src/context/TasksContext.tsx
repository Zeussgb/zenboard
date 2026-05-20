import { createContext, useContext, useState, useEffect } from 'react'
import type { Task, CreateTaskDTO } from '../types'
import { getTasks, createTask, updateTask, toggleTask, deleteTask } from '../api/tasksApi'

interface TasksContextType {
  tasks: Task[]
  loading: boolean
  error: string | null
  addTask: (data: CreateTaskDTO) => Promise<void>
  editTask: (id: number, data: CreateTaskDTO) => Promise<void>
  toggleTaskCompleted: (id: number, completed: boolean) => Promise<void>
  removeTask: (id: number) => Promise<void>
}

const TasksContext = createContext<TasksContextType | null>(null)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    try {
      setLoading(true)
      const data = await getTasks()
      setTasks(data)
    } catch (err) {
      setError('Error al cargar las tareas')
    } finally {
      setLoading(false)
    }
  }

  async function addTask(data: CreateTaskDTO) {
    const newTask = await createTask(data)
    setTasks(prev => [...prev, newTask])
  }

  async function editTask(id: number, data: CreateTaskDTO) {
    const updated = await updateTask(id, data)
    setTasks(prev => prev.map(t => t.id === id ? updated : t))
  }

  async function toggleTaskCompleted(id: number, completed: boolean) {
    const updated = await toggleTask(id, completed)
    setTasks(prev => prev.map(t => t.id === id ? updated : t))
  }

  async function removeTask(id: number) {
    await deleteTask(id)
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <TasksContext.Provider value={{ tasks, loading, error, addTask, editTask, toggleTaskCompleted, removeTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  if (!context) throw new Error('useTasks debe usarse dentro de TasksProvider')
  return context
}