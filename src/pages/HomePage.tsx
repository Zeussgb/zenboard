import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">ZenBoard</h1>
        <p className="text-gray-500 text-lg">Tu espacio para organizar notas y tareas</p>
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          to="/notes"
          className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow p-8 hover:border-indigo-400 hover:shadow-md transition-all w-48"
        >
          <span className="text-5xl">📝</span>
          <span className="font-semibold text-gray-700 text-lg">Notas</span>
          <span className="text-gray-400 text-sm text-center">Crea y organiza tus notas</span>
        </Link>

        <Link
          to="/tasks"
          className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow p-8 hover:border-indigo-400 hover:shadow-md transition-all w-48"
        >
          <span className="text-5xl">✅</span>
          <span className="font-semibold text-gray-700 text-lg">Tareas</span>
          <span className="text-gray-400 text-sm text-center">Gestiona tus tareas pendientes</span>
        </Link>
      </div>
    </div>
  )
}

export default HomePage