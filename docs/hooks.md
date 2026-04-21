# Hooks

## useGames

Custom hook que gestiona todas las operaciones CRUD sobre los juegos.
Se conecta con el backend a través del cliente de API tipado.

**Estado que maneja:**
- `games: Game[]` — lista de juegos
- `loading: boolean` — indica si hay una petición en curso
- `error: string | null` — mensaje de error si algo falla

**Funciones que expone:**
- `fetchGames()` — recarga los juegos desde el backend
- `addGame(game)` — crea un juego nuevo
- `editGame(id, data)` — edita un juego existente
- `removeGame(id)` — elimina un juego

**Hooks de React utilizados:**
- `useState` — para gestionar games, loading y error
- `useEffect` — para cargar los juegos al montar el componente
- `useCallback` — para evitar que las funciones se recreen en cada render

**Uso:**
```tsx
const { games, loading, error, addGame, removeGame } = useGames()
```