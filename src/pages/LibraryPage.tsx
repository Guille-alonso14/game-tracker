import { useState } from 'react'
import { useGamesContext } from '../context/GamesContext'
import GameList from '../components/GameList'
import FilterBar from '../components/FilterBar'
import GameForm from '../components/GameForm'
import type { Status, Platform, Game } from '../types/game'

export default function LibraryPage() {
  const { games, loading, error, addGame } = useGamesContext()
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all')
  const [platformFilter, setPlatformFilter] = useState<Platform | 'all'>('all')
  const [showForm, setShowForm] = useState(false)

  const filtered = games.filter(g => {
    const matchStatus = statusFilter === 'all' || g.status === statusFilter
    const matchPlatform = platformFilter === 'all' || g.platform === platformFilter
    return matchStatus && matchPlatform
  })

  async function handleAdd(data: Omit<Game, 'id' | 'createdAt'>) {
    await addGame(data)
    setShowForm(false)
  }

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
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Mi biblioteca</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancelar' : '+ Añadir juego'}
        </button>
      </div>
      <p className="text-gray-500 mb-6">Todos tus juegos en un solo lugar.</p>

      {showForm && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Nuevo juego</h2>
          <GameForm
            onSubmit={handleAdd}
            onCancel={() => setShowForm(false)}
            submitLabel="Añadir juego"
          />
        </div>
      )}

      <FilterBar
        statusFilter={statusFilter}
        platformFilter={platformFilter}
        onStatusChange={setStatusFilter}
        onPlatformChange={setPlatformFilter}
      />
      <GameList
        games={filtered}
        emptyMessage="No hay juegos con estos filtros."
      />
    </div>
  )
}