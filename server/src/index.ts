import { readFileSync } from 'fs'
import { resolve } from 'path'

import express from 'express'
import cors from 'cors'
import { gamesRouter } from './routes/games'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1/games', gamesRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})