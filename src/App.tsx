import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LibraryPage from './pages/LibraryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-6">
          <span className="font-bold text-gray-900">🎮 Game Tracker</span>
          <a href="/" className="text-sm text-gray-600 hover:text-gray-900">Inicio</a>
          <a href="/library" className="text-sm text-gray-600 hover:text-gray-900">Biblioteca</a>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}