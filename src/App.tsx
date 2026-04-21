import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LibraryPage from './pages/LibraryPage'
import GameDetailPage from './pages/GameDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center gap-6">
        <span
          onClick={() => navigate('/')}
          className="font-bold text-gray-900 cursor-pointer"
        >
          🎮 Game Tracker
        </span>
        <span
          onClick={() => navigate('/')}
          className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Inicio
        </span>
        <span
          onClick={() => navigate('/library')}
          className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Biblioteca
        </span>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/game/:id" element={<GameDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}