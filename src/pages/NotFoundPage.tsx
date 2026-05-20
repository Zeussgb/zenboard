import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 p-6">
      <span className="text-8xl">😕</span>
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-500 text-lg">Esta página no existe</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage