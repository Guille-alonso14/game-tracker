import { useMemo } from 'react'
import type { Game } from '../types/game'

export function useRecommendations(games: Game[]) {
  const recommendations = useMemo(() => {
    const completed = games.filter(g => g.status === 'completed')
    const pending = games.filter(g => g.status === 'pending')

    if (completed.length === 0 || pending.length === 0) return []

    const genreCount: Record<string, number> = {}
    const platformCount: Record<string, number> = {}

    completed.forEach(g => {
      genreCount[g.genre] = (genreCount[g.genre] ?? 0) + 1
      platformCount[g.platform] = (platformCount[g.platform] ?? 0) + 1
    })

    const scored = pending.map(g => {
      const genreScore = genreCount[g.genre] ?? 0
      const platformScore = platformCount[g.platform] ?? 0
      return { game: g, score: genreScore + platformScore }
    })

    return scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(s => s.game)
  }, [games])

  return recommendations
}