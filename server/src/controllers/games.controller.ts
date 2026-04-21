import type { Request, Response } from 'express'
import * as gamesService from '../services/games.service'

function getId(req: Request): string {
  const id = req.params.id
  return Array.isArray(id) ? id[0] : id
}

export function getAll(_req: Request, res: Response) {
  const games = gamesService.getAllGames()
  res.json(games)
}

export function getOne(req: Request, res: Response) {
  const game = gamesService.getGameById(getId(req))
  if (!game) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.json(game)
}

export function create(req: Request, res: Response) {
  const { title, platform, genre, status, hoursEstimated, score, notes } = req.body
  if (!title || !platform || !genre || !status) {
    res.status(400).json({ error: 'Faltan campos obligatorios' })
    return
  }
  const newGame = gamesService.createGame({
    title,
    platform,
    genre,
    status,
    hoursEstimated: hoursEstimated ?? 0,
    score,
    notes: notes ?? '',
  })
  res.status(201).json(newGame)
}

export function update(req: Request, res: Response) {
  const updated = gamesService.updateGame(getId(req), req.body)
  if (!updated) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.json(updated)
}

export function remove(req: Request, res: Response) {
  const deleted = gamesService.deleteGame(getId(req))
  if (!deleted) {
    res.status(404).json({ error: 'Juego no encontrado' })
    return
  }
  res.status(200).json({ message: 'Juego eliminado' })
}