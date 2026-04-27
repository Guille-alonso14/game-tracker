import { lazy, Suspense } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import AuthPage from './pages/AuthPage'

const HomePage = lazy(() => import('./pages/HomePage'))
const LibraryPage = lazy(() => import('./pages/LibraryPage'))
const GameDetailPage = lazy(() => import('./pages/GameDetailPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function Navbar() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

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
        <div className="ml-auto flex items-center gap-4">
          <span className="text-xs text-gray-400">{user?.email}</span>
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="flex justify-center items-center h-screen text-gray-400">
      Cargando...
    </div>
  )

  if (!user) return <AuthPage />

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="flex justify-center items-center h-48 text-gray-400">
            Cargando...
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/game/:id" element={<GameDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}