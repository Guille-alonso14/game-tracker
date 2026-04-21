import { randomUUID } from 'crypto'
import { games } from '../config/data'
import type { Game } from '../../../src/types/game'

export function getAllGames(): Game[] {
  return games
}

export function getGameById(id: string): Game | undefined {
  return games.find(g => g.id === id)
}

export function createGame(data: Omit<Game, 'id' | 'createdAt'>): Game {
  const newGame: Game = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }
  games.push(newGame)
  return newGame
}

export function updateGame(id: string, data: Partial<Game>): Game | undefined {
  const index = games.findIndex(g => g.id === id)
  if (index === -1) return undefined
  games[index] = { ...games[index], ...data }
  return games[index]
}

export function deleteGame(id: string): boolean {
  const index = games.findIndex(g => g.id === id)
  if (index === -1) return false
  games.splice(index, 1)
  return true
}