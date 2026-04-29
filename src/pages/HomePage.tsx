import { useGamesContext } from '../context/GamesContext'
import GameList from '../components/GameList'
import Recommendations from '../components/Recommendations'

export default function HomePage() {
  const { games, loading, error } = useGamesContext()

  const inProgress = games.filter(g => g.status === 'in-progress')

  if (loading) return (
    <div className="flex justify-center items-center h-48 text-gray-400">
      Cargando juegos...
    </div>
  )

  if (error) return (
    <div className="flex justify-center items-center h-48 text-red-400">
      {error}
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Recommendations />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        En progreso
      </h1>
      <p className="text-gray-500 mb-6">
        Tus juegos activos — retoma donde lo dejaste.
      </p>
      <GameList
        games={inProgress}
        emptyMessage="No tienes juegos en progreso. ¡Añade uno desde tu biblioteca!"
      />
    </div>
  )
}