import { createContext, useContext, type ReactNode } from 'react'
import { useGames } from '../hooks/useGames'
import type { Game } from '../types/game'

interface GamesContextType {
  games: Game[]
  loading: boolean
  error: string | null
  fetchGames: () => Promise<void>
  addGame: (game: Omit<Game, 'id' | 'createdAt'>) => Promise<Game>
  editGame: (id: string, data: Partial<Game>) => Promise<Game>
  removeGame: (id: string) => Promise<void>
}

const GamesContext = createContext<GamesContextType | null>(null)

export function GamesProvider({ children }: { children: ReactNode }) {
  const gamesData = useGames()

  return (
    <GamesContext.Provider value={gamesData}>
      {children}
    </GamesContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export function useGamesContext() {
  const context = useContext(GamesContext)
  if (!context) throw new Error('useGamesContext debe usarse dentro de GamesProvider')
  return context
}