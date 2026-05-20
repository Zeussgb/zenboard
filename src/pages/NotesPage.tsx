import { useState } from 'react'
import { useNotes } from '../context/NotesContext'
import useSearch from '../hooks/useSearch'
import NoteCard from '../components/NoteCard'
import NoteForm from '../components/NoteForm'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import type { Note, CreateNoteDTO } from '../types'

const CATEGORIES = ['Personal', 'Trabajo', 'Estudio', 'Ideas', 'Otro']

function NotesPage() {
  const { notes, loading, error, addNote, editNote, removeNote } = useNotes()
  const [showForm, setShowForm] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const { searchText, setSearchText, selectedCategory, setSelectedCategory, filteredItems } =
    useSearch(notes as unknown as Record<string, unknown>[], ['title', 'content'])

  const handleSubmit = async (data: CreateNoteDTO) => {
    if (editingNote) {
      await editNote(editingNote.id, data)
    } else {
      await addNote(data)
    }
    setShowForm(false)
    setEditingNote(null)
  }

  const handleEdit = (note: Note) => {
    setEditingNote(note)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingNote(null)
  }

  if (loading) return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <p className="text-gray-400 animate-pulse">Cargando notas...</p>
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
        <h1 className="text-2xl font-bold text-gray-800">📝 Mis notas</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          + Nueva nota
        </button>
      </div>

      {showForm && (
        <NoteForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          initialData={editingNote ?? undefined}
        />
      )}

      <SearchBar
        placeholder="Buscar notas..."
        value={searchText}
        onChange={setSearchText}
      />

      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {filteredItems.length === 0 ? (
        <p className="text-gray-400 text-center mt-8">No hay notas todavía. ¡Crea una!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(filteredItems as unknown as Note[]).map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={removeNote}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NotesPage