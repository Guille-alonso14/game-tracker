export type Status = 'pending' | 'in-progress' | 'completed'

export type Platform =
  | 'PC'
  | 'PlayStation'
  | 'Xbox'
  | 'Nintendo Switch'
  | 'Mobile'

export interface Game {
  id: string
  title: string
  platform: Platform
  genre: string
  status: Status
  hoursEstimated: number
  score?: number
  notes?: string
  cover?: string
  createdAt: string
}