import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GamesProvider } from './context/GamesContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GamesProvider>
        <App />
      </GamesProvider>
    </BrowserRouter>
  </StrictMode>,
)