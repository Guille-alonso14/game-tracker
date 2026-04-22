import type { Game } from '../types/game'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1'

export async function getGames(): Promise<Game[]> {
  const res = await fetch(`${BASE_URL}/games`)
  if (!res.ok) throw new Error('Error al obtener los juegos')
  return res.json()
}

export async function getGame(id: string): Promise<Game> {
  const res = await fetch(`${BASE_URL}/games/${id}`)
  if (!res.ok) throw new Error('Juego no encontrado')
  return res.json()
}

export async function createGame(game: Omit<Game, 'id' | 'createdAt'>): Promise<Game> {
  const res = await fetch(`${BASE_URL}/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
  })
  if (!res.ok) throw new Error('Error al crear el juego')
  return res.json()
}

export async function updateGame(id: string, game: Partial<Game>): Promise<Game> {
  const res = await fetch(`${BASE_URL}/games/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
  })
  if (!res.ok) throw new Error('Error al actualizar el juego')
  return res.json()
}

export async function deleteGame(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/games/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('Error al eliminar el juego')
}