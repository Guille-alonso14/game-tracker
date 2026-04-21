import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-96 gap-4">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="text-gray-500 text-lg">Página no encontrada</p>
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </button>
    </div>
  )
}