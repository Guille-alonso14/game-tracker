# Context y estado global

## GamesContext

Contexto que comparte el estado global de los juegos entre todos
los componentes de la app sin necesidad de pasar props manualmente.

## ¿Por qué Context API?

La lista de juegos se necesita en varias páginas a la vez (HomePage,
LibraryPage, GameDetailPage). Sin Context habría que pasar los datos
como props a través de varios niveles de componentes (prop drilling).
Context lo evita poniendo los datos disponibles globalmente.

## Implementación

- `GamesContext` — el contexto con el tipo definido
- `GamesProvider` — el provider que envuelve la app y comparte el estado
- `useGamesContext` — hook personalizado para consumir el contexto
  de forma segura (lanza error si se usa fuera del provider)

## Uso

Envolver la app con el provider en `main.tsx`:

```tsx
<GamesProvider>
  <App />
</GamesProvider>
```

Consumir en cualquier componente:

```tsx
const { games, loading, addGame } = useGamesContext()
```