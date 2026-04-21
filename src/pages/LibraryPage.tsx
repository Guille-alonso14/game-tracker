import { useState } from 'react'
import { useGamesContext } from '../context/GamesContext'
import GameList from '../components/GameList'
import FilterBar from '../components/FilterBar'
import type { Status, Platform } from '../types/game'

export default function LibraryPage() {
  const { games, loading, error } = useGamesContext()
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all')
  const [platformFilter, setPlatformFilter] = useState<Platform | 'all'>('all')

  const filtered = games.filter(g => {
    const matchStatus = statusFilter === 'all' || g.status === statusFilter
    const matchPlatform = platformFilter === 'all' || g.platform === platformFilter
    return matchStatus && matchPlatform
  })

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
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Mi biblioteca
      </h1>
      <p className="text-gray-500 mb-6">
        Todos tus juegos en un solo lugar.
      </p>
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