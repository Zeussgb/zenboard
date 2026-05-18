import type { Note } from '../types'

interface NoteCardProps {
  note: Note
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
}

function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-800 text-lg break-words min-w-0">
          {note.title}
        </h3>
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
          {note.category}
        </span>
      </div>
      <p className="text-gray-600 text-sm break-words">
        {note.content}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400">{note.createdAt}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="text-xs px-3 py-1 border border-gray-300 rounded-lg text-gray-500 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-xs px-3 py-1 border border-red-400 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard