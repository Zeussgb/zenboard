import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <h1 className="text-2xl font-bold tracking-tight">ZenBoard</h1>
      <div className="flex gap-4">
        <Link
          to="/notes"
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            location.pathname === '/notes'
              ? 'bg-white text-indigo-600'
              : 'hover:bg-indigo-500'
          }`}
        >
          📝 Notas
        </Link>
        <Link
          to="/tasks"
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            location.pathname === '/tasks'
              ? 'bg-white text-indigo-600'
              : 'hover:bg-indigo-500'
          }`}
        >
          ✅ Tareas
        </Link>
      </div>
    </nav>
  )
}

export default Navbar