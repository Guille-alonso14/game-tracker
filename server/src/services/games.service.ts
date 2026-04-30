import { supabase } from '../config/supabase'
import type { Game } from '../../../src/types/game'

export async function getAllGames(userId: string): Promise<Game[]> {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('user_id', userId)
  if (error) throw new Error(error.message)
  return data.map(toGame)
}

export async function getGameById(id: string, userId: string): Promise<Game | undefined> {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('id', id)
    .eq('user_id', userId)
    .single()
  if (error) return undefined
  return toGame(data)
}

export async function createGame(game: Omit<Game, 'id' | 'createdAt'>, userId: string): Promise<Game> {
  const { data, error } = await supabase
    .from('games')
    .insert({
      title: game.title,
      platform: game.platform,
      genre: game.genre,
      status: game.status,
      hours_estimated: game.hoursEstimated,
      score: game.score,
      notes: game.notes,
      cover: game.cover,
      user_id: userId,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return toGame(data)
}

export async function updateGame(id: string, game: Partial<Game>, userId: string): Promise<Game | undefined> {
  const { data, error } = await supabase
    .from('games')
    .update({
      title: game.title,
      platform: game.platform,
      genre: game.genre,
      status: game.status,
      hours_estimated: game.hoursEstimated,
      score: game.score,
      notes: game.notes,
      cover: game.cover,
    })
    .eq('id', id)
    .eq('user_id', userId)
    .select()
    .single()
  if (error) return undefined
  return toGame(data)
}

export async function deleteGame(id: string, userId: string): Promise<boolean> {
  const { error } = await supabase
    .from('games')
    .delete()
    .eq('id', id)
    .eq('user_id', userId)
  return !error
}

function toGame(data: Record<string, unknown>): Game {
  return {
    id: data.id as string,
    title: data.title as string,
    platform: data.platform as string,
    genre: data.genre as string,
    status: data.status as string,
    hoursEstimated: data.hours_estimated as number,
    score: data.score as number | undefined,
    notes: data.notes as string,
    cover: data.cover as string | undefined,
    createdAt: data.created_at as string,
  } as Game
}