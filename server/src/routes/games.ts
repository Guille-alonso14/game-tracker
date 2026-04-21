import { Router } from 'express'
import * as gamesController from '../controllers/games.controller'

export const gamesRouter = Router()

gamesRouter.get('/', gamesController.getAll)
gamesRouter.get('/:id', gamesController.getOne)
gamesRouter.post('/', gamesController.create)
gamesRouter.put('/:id', gamesController.update)
gamesRouter.delete('/:id', gamesController.remove)