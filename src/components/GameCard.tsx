import { useNavigate } from 'react-router-dom'
import type { Game } from '../types/game'
import StatusBadge from './StatusBadge'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      {game.cover && (
  <div style={{ height: '120px', overflow: 'hidden' }}>
    <img
      src={`https:${game.cover}`}
      alt={game.title}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
)}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {game.title}
          </h3>
          <StatusBadge status={game.status} />
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          <p>{game.platform} · {game.genre}</p>
          <p>{game.hoursEstimated}h estimadas</p>
          {game.score !== undefined && (
            <p className="text-yellow-600 font-medium">★ {game.score}/10</p>
          )}
        </div>
      </div>
    </div>
  )
}