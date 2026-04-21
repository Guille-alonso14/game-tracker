import type { Game } from '../../../src/types/game'
import { randomUUID } from 'crypto'

export const games: Game[] = [
  {
    id: randomUUID(),
    title: 'The Witcher 3',
    platform: 'PC',
    genre: 'RPG',
    status: 'in-progress',
    hoursEstimated: 100,
    score: undefined,
    notes: 'Estoy en Skellige',
    createdAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: 'Hollow Knight',
    platform: 'PC',
    genre: 'Metroidvania',
    status: 'pending',
    hoursEstimated: 40,
    score: undefined,
    notes: '',
    createdAt: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    title: 'God of War',
    platform: 'PlayStation',
    genre: 'Acción',
    status: 'completed',
    hoursEstimated: 30,
    score: 9,
    notes: 'Increíble historia',
    createdAt: new Date().toISOString(),
  },
]