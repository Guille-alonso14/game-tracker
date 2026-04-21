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
      className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
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
  )
}