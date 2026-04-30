# Arquitectura del proyecto

## Estructura de componentes
src/
├── components/
│   ├── GameCard.tsx        → tarjeta de un juego
│   ├── GameList.tsx        → lista de juegos
│   ├── GameForm.tsx        → formulario añadir/editar
│   ├── FilterBar.tsx       → filtros por estado y plataforma
│   └── StatusBadge.tsx     → badge de estado
├── pages/
│   ├── HomePage.tsx        → juegos en progreso
│   ├── LibraryPage.tsx     → todos los juegos con filtros
│   ├── GameDetailPage.tsx  → detalle de un juego
│   └── NotFoundPage.tsx    → página 404
├── context/
│   └── GamesContext.tsx    → estado global de los juegos
├── hooks/
│   └── useGames.ts         → custom hook para operaciones CRUD
├── api/
│   └── client.ts           → cliente de API tipado
└── types/
└── game.ts             → tipos TypeScript

## Tipos TypeScript

```typescript
type Status = 'pending' | 'in-progress' | 'completed'

type Platform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo Switch' | 'Mobile'

interface Game {
  id: string
  title: string
  platform: Platform
  genre: string
  status: Status
  hoursEstimated: number
  score?: number
  notes?: string
  createdAt: string
}
```

## Rutas
/            → HomePage (juegos en progreso)
/library     → LibraryPage (todos los juegos)
/game/:id    → GameDetailPage (detalle)


       → NotFoundPage (404)



## Endpoints del backend
GET    /api/v1/games       → lista todos los juegos
GET    /api/v1/games/:id   → detalle de un juego
POST   /api/v1/games       → crear juego
PUT    /api/v1/games/:id   → editar juego
DELETE /api/v1/games/:id   → eliminar juego

## Flujo de datos
HomePage / LibraryPage
↓ usa
GamesContext (estado global)
↓ usa
useGames (custom hook)
↓ llama
api/client.ts (fetch tipado)
↓ HTTP
Express backend (server/)
↓
Array en memoria (datos mock)

## Decisiones de arquitectura

- Los datos viven en el backend (array en memoria). El frontend
  nunca guarda juegos en LocalStorage — la API es la única fuente
  de verdad.
- El estado global se gestiona con Context API para evitar prop
  drilling entre páginas y componentes.
- El cliente de API es una capa separada (src/api/client.ts) para
  que los componentes no hagan fetch directamente.
- Los tipos TypeScript del frontend están alineados con los datos
  que devuelve el backend.

  ## Lazy loading

Las páginas se cargan de forma diferida usando `React.lazy` y `Suspense`.
Esto significa que el código de cada página solo se descarga cuando el
usuario la visita por primera vez, reduciendo el tamaño del bundle inicial.

```tsx
const HomePage = lazy(() => import('./pages/HomePage'))
```

Mientras se carga la página se muestra un fallback con el mensaje "Cargando...".

## Autenticación con Supabase

La autenticación se gestiona con Supabase Auth. El flujo es:

1. El usuario se registra o inicia sesión en `AuthPage`
2. Supabase devuelve una sesión con el `user.id`
3. El frontend envía el `user_id` en cada petición al backend como header `x-user-id`
4. El backend filtra los juegos por `user_id` en Supabase

## Base de datos Supabase

Los datos de los juegos se guardan en la tabla `games` de Supabase.
El backend usa el cliente de Supabase para hacer las operaciones CRUD.
Cada juego tiene un `user_id` que lo asocia al usuario que lo creó.

## Integración con IGDB

IGDB es la API de videojuegos de Twitch. Se usa para buscar covers
de juegos automáticamente. El flujo es:

1. El usuario escribe el título del juego en el formulario
2. Hace clic en el botón de búsqueda
3. El frontend llama al endpoint `/api/v1/games/search-cover`
4. El backend se autentica con Twitch y llama a la API de IGDB
5. IGDB devuelve los resultados con covers
6. El usuario selecciona el cover que quiere
7. El cover se guarda junto con el juego en Supabase