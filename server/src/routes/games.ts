import { Router } from 'express'
import * as gamesController from '../controllers/games.controller'
import { searchGameCovers } from '../services/igdb.service'

export const gamesRouter = Router()

gamesRouter.get('/', gamesController.getAll)
gamesRouter.get('/search-cover', async (req, res) => {
  const title = req.query.title as string
  if (!title) {
    res.status(400).json({ error: 'Title is required' })
    return
  }
  const results = await searchGameCovers(title)
  res.json(results)
})
gamesRouter.get('/:id', gamesController.getOne)
gamesRouter.post('/', gamesController.create)
gamesRouter.put('/:id', gamesController.update)
gamesRouter.delete('/:id', gamesController.remove)