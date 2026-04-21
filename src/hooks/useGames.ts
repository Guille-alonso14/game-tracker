import { useState, useEffect, useCallback } from 'react'
import type { Game } from '../types/game'
import * as api from '../api/client'

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchGames = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await api.getGames()
      setGames(data)
    } catch {
      setError('Error al cargar los juegos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await api.getGames()
        if (!cancelled) setGames(data)
      } catch {
        if (!cancelled) setError('Error al cargar los juegos')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => { cancelled = true }
  }, [])

  const addGame = useCallback(async (game: Omit<Game, 'id' | 'createdAt'>) => {
    const newGame = await api.createGame(game)
    setGames(prev => [...prev, newGame])
    return newGame
  }, [])

  const editGame = useCallback(async (id: string, data: Partial<Game>) => {
    const updated = await api.updateGame(id, data)
    setGames(prev => prev.map(g => g.id === id ? updated : g))
    return updated
  }, [])

  const removeGame = useCallback(async (id: string) => {
    await api.deleteGame(id)
    setGames(prev => prev.filter(g => g.id !== id))
  }, [])

  return {
    games,
    loading,
    error,
    fetchGames,
    addGame,
    editGame,
    removeGame,
  }
}