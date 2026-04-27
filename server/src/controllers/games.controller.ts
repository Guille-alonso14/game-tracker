import type { Request, Response } from 'express'
import * as gamesService from '../services/games.service'

function getId(req: Request): string {
  const id = req.params.id
  return Array.isArray(id) ? id[0] : id
}

function getUserId(req: Request): string {
  return req.headers['x-user-id'] as string ?? ''
}

export async function getAll(req: Request, res: Response) {
  const userId = getUserId(req)
  if (!userId) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }
  const games = await gamesService.getAllGames(userId)
  res.json(games)
}

export async function getOne(req: Request, res: Response) {
  const userId = getUserId(req)
  if (!userId) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }
  const game = await gamesService.getGameById(getId(req), userId)
  if (!game) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.json(game)
}

export async function create(req: Request, res: Response) {
  const userId = getUserId(req)
  if (!userId) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }
  const { title, platform, genre, status, hoursEstimated, score, notes } = req.body
  if (!title || !platform || !genre || !status) {
    res.status(400).json({ error: 'Faltan campos obligatorios' })
    return
  }
  const newGame = await gamesService.createGame({
    title,
    platform,
    genre,
    status,
    hoursEstimated: hoursEstimated ?? 0,
    score,
    notes: notes ?? '',
  }, userId)
  res.status(201).json(newGame)
}

export async function update(req: Request, res: Response) {
  const userId = getUserId(req)
  if (!userId) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }
  const updated = await gamesService.updateGame(getId(req), req.body, userId)
  if (!updated) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.json(updated)
}

export async function remove(req: Request, res: Response) {
  const userId = getUserId(req)
  if (!userId) {
    res.status(401).json({ error: 'No autorizado' })
    return
  }
  const deleted = await gamesService.deleteGame(getId(req), userId)
  if (!deleted) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.status(200).json({ message: 'Juego eliminado' })
}