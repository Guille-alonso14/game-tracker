import type { Game } from '../types/game'
import { supabase } from './supabase'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1'

async function getHeaders(): Promise<Record<string, string>> {
  const { data } = await supabase.auth.getSession()
  const userId = data.session?.user.id ?? ''
  return {
    'Content-Type': 'application/json',
    'x-user-id': userId,
  }
}

export async function getGames(): Promise<Game[]> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games`, { headers })
  if (!res.ok) throw new Error('Error al obtener los juegos')
  return res.json()
}

export async function getGame(id: string): Promise<Game> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games/${id}`, { headers })
  if (!res.ok) throw new Error('Juego no encontrado')
  return res.json()
}

export async function createGame(game: Omit<Game, 'id' | 'createdAt'>): Promise<Game> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games`, {
    method: 'POST',
    headers,
    body: JSON.stringify(game),
  })
  if (!res.ok) throw new Error('Error al crear el juego')
  return res.json()
}

export async function updateGame(id: string, game: Partial<Game>): Promise<Game> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(game),
  })
  if (!res.ok) throw new Error('Error al actualizar el juego')
  return res.json()
}

export async function deleteGame(id: string): Promise<void> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games/${id}`, {
    method: 'DELETE',
    headers,
  })
  if (!res.ok) throw new Error('Error al eliminar el juego')
}

export async function searchCovers(title: string): Promise<{ id: number; name: string; cover?: string }[]> {
  const headers = await getHeaders()
  const res = await fetch(`${BASE_URL}/games/search-cover?title=${encodeURIComponent(title)}`, { headers })
  if (!res.ok) throw new Error('Error al buscar covers')
  return res.json()
}