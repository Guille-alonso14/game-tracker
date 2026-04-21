# Componentes

## StatusBadge

Muestra el estado de un juego como una etiqueta de color.

**Props:**
- `status: Status` — estado del juego (pending, in-progress, completed)

**Uso:**
```tsx
<StatusBadge status="in-progress" />
```

## GameCard

Tarjeta clickable que muestra la información resumida de un juego.
Al hacer clic navega a la página de detalle.

**Props:**
- `game: Game` — objeto con los datos del juego

**Uso:**
```tsx
<GameCard game={game} />
```

## GameList

Lista de juegos en formato grid. Muestra un mensaje si no hay juegos.

**Props:**
- `games: Game[]` — array de juegos a mostrar
- `emptyMessage?: string` — mensaje cuando la lista está vacía

**Uso:**
```tsx
<GameList games={games} emptyMessage="No tienes juegos en progreso" />
```

## FilterBar

Barra de filtros por estado y plataforma.

**Props:**
- `statusFilter: Status | 'all'` — filtro de estado activo
- `platformFilter: Platform | 'all'` — filtro de plataforma activo
- `onStatusChange: (status: Status | 'all') => void` — callback al cambiar estado
- `onPlatformChange: (platform: Platform | 'all') => void` — callback al cambiar plataforma

**Uso:**
```tsx
<FilterBar
  statusFilter={statusFilter}
  platformFilter={platformFilter}
  onStatusChange={setStatusFilter}
  onPlatformChange={setPlatformFilter}
/>
```