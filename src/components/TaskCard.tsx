import type { Task } from '../types'

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

function TaskCard({ task, onEdit, onDelete, onToggle }: TaskCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow p-4 flex flex-col gap-2 ${task.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-4 h-4 accent-indigo-600 flex-shrink-0 cursor-pointer"
          />
          <h3 className={`font-semibold text-gray-800 text-lg break-words min-w-0 ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </h3>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 flex-shrink-0">
          {task.category}
        </span>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm break-words">
          {task.description}
        </p>
      )}

      {task.deadline && (
        <span className="text-xs text-amber-500">
          📅 Fecha límite: {task.deadline}
        </span>
      )}

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400">{task.createdAt}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="text-xs px-3 py-1 border border-gray-300 rounded-lg text-gray-500 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-xs px-3 py-1 border border-red-400 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard