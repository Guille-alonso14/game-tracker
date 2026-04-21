import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGamesContext } from '../context/GamesContext'
import StatusBadge from '../components/StatusBadge'
import GameForm from '../components/GameForm'
import type { Game } from '../types/game'

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { games, editGame, removeGame } = useGamesContext()
  const [editing, setEditing] = useState(false)

  const game = games.find(g => g.id === id)

  if (!game) return (
    <div className="flex justify-center items-center h-48 text-gray-400">
      Juego no encontrado
    </div>
  )

  async function handleEdit(data: Omit<Game, 'id' | 'createdAt'>) {
    await editGame(game!.id, data)
    setEditing(false)
  }

  async function handleDelete() {
    if (!confirm('¿Seguro que quieres eliminar este juego?')) return
    await removeGame(game!.id)
    navigate('/library')
  }

  if (editing) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Editar juego</h1>
        <GameForm
          initialData={game}
          onSubmit={handleEdit}
          onCancel={() => setEditing(false)}
          submitLabel="Guardar cambios"
        />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1"
      >
        ← Volver
      </button>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">{game.title}</h1>
          <StatusBadge status={game.status} />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
          <div>
            <p className="text-xs text-gray-400 mb-1">Plataforma</p>
            <p className="font-medium">{game.platform}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Género</p>
            <p className="font-medium">{game.genre}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Horas estimadas</p>
            <p className="font-medium">{game.hoursEstimated}h</p>
          </div>
          {game.score !== undefined && (
            <div>
              <p className="text-xs text-gray-400 mb-1">Puntuación</p>
              <p className="font-medium text-yellow-600">★ {game.score}/10</p>
            </div>
          )}
        </div>
        {game.notes && (
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-1">Notas</p>
            <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{game.notes}</p>
          </div>
        )}
        <div className="flex gap-3">
          <button
            onClick={() => setEditing(true)}
            className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 border border-red-200 text-red-600 rounded-lg py-2 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}