import type { Note, CreateNoteDTO } from '../types'

const API_URL = `${import.meta.env.VITE_API_URL}/api/v1/notes`

export async function getNotes(): Promise<Note[]> {
  const response = await fetch(API_URL)
  if (!response.ok) throw new Error('Error al obtener las notas')
  return response.json()
}

export async function createNote(data: CreateNoteDTO): Promise<Note> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Error al crear la nota')
  return response.json()
}

export async function updateNote(id: number, data: CreateNoteDTO): Promise<Note> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Error al actualizar la nota')
  return response.json()
}

export async function deleteNote(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!response.ok) throw new Error('Error al eliminar la nota')
}