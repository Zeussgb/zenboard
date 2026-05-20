import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotesProvider } from './context/NotesContext'
import { TasksProvider } from './context/TasksContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import TasksPage from './pages/TasksPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <TasksProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </TasksProvider>
      </NotesProvider>
    </BrowserRouter>
  )
}

export default App