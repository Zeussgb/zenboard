import { createContext, useContext, useState, useEffect } from 'react'
import type { Note, CreateNoteDTO } from '../types'
import { getNotes, createNote, updateNote, deleteNote } from '../api/notesApi'

interface NotesContextType {
  notes: Note[]
  loading: boolean
  error: string | null
  addNote: (data: CreateNoteDTO) => Promise<void>
  editNote: (id: number, data: CreateNoteDTO) => Promise<void>
  removeNote: (id: number) => Promise<void>
}

const NotesContext = createContext<NotesContextType | null>(null)

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Cargamos las notas al montar el componente
  useEffect(() => {
    loadNotes()
  }, [])

  async function loadNotes() {
    try {
      setLoading(true)
      const data = await getNotes()
      setNotes(data)
    } catch (err) {
      setError('Error al cargar las notas')
    } finally {
      setLoading(false)
    }
  }

  async function addNote(data: CreateNoteDTO) {
    const newNote = await createNote(data)
    setNotes(prev => [...prev, newNote])
  }

  async function editNote(id: number, data: CreateNoteDTO) {
    const updated = await updateNote(id, data)
    setNotes(prev => prev.map(n => n.id === id ? updated : n))
  }

  async function removeNote(id: number) {
    await deleteNote(id)
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  return (
    <NotesContext.Provider value={{ notes, loading, error, addNote, editNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext)
  if (!context) throw new Error('useNotes debe usarse dentro de NotesProvider')
  return context
}