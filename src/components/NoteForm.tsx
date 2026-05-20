import { useState } from 'react'
import type { Note, CreateNoteDTO } from '../types'

interface NoteFormProps {
  onSubmit: (data: CreateNoteDTO) => void
  onCancel: () => void
  initialData?: Note
}

const CATEGORIES = ['Personal', 'Trabajo', 'Estudio', 'Ideas', 'Otro']

function NoteForm({ onSubmit, onCancel, initialData }: NoteFormProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [category, setCategory] = useState(initialData?.category || 'Personal')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit({ title: title.trim(), content: content.trim(), category })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 shadow p-4 flex flex-col gap-3">
      <h2 className="font-semibold text-gray-800 text-lg">
        {initialData ? 'Editar nota' : 'Nueva nota'}
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Título</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título de la nota..."
          className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Contenido</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Escribe tu nota aquí..."
          rows={4}
          className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 resize-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Categoría</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 justify-end mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {initialData ? 'Guardar cambios' : 'Crear nota'}
        </button>
      </div>
    </form>
  )
}

export default NoteForm