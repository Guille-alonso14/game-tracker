import type { Game } from '../types/game'
import GameCard from './GameCard'

interface Props {
  games: Game[]
  emptyMessage?: string
}

export default function GameList({ games, emptyMessage = 'No hay juegos' }: Props) {
  if (games.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-lg">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}