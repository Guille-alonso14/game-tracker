import { useGamesContext } from '../context/GamesContext'
import { useRecommendations } from '../hooks/useRecommendations'
import GameCard from './GameCard'

export default function Recommendations() {
  const { games } = useGamesContext()
  const recommendations = useRecommendations(games)

  if (recommendations.length === 0) return null

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        Recomendados para ti
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Basado en los géneros y plataformas que más te gustan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}