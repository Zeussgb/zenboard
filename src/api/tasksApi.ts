import type { Task, CreateTaskDTO } from '../types'

const API_URL = 'http://localhost:3000/api/v1/tasks'

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(API_URL)
  if (!response.ok) throw new Error('Error al obtener las tareas')
  return response.json()
}

export async function createTask(data: CreateTaskDTO): Promise<Task> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Error al crear la tarea')
  return response.json()
}

export async function updateTask(id: number, data: Partial<CreateTaskDTO>): Promise<Task> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Error al actualizar la tarea')
  return response.json()
}

export async function toggleTask(id: number, completed: boolean): Promise<Task> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  })
  if (!response.ok) throw new Error('Error al actualizar la tarea')
  return response.json()
}

export async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) throw new Error('Error al eliminar la tarea')
}