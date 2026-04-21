# Capa de red y cliente de API

## src/api/client.ts

Cliente de API tipado que centraliza todas las peticiones al backend.
Los componentes nunca hacen fetch directamente — siempre usan este cliente.

## Funciones

| Función | Método | Endpoint | Descripción |
|---|---|---|---|
| `getGames()` | GET | /api/v1/games | Obtiene todos los juegos |
| `getGame(id)` | GET | /api/v1/games/:id | Obtiene un juego por id |
| `createGame(data)` | POST | /api/v1/games | Crea un juego nuevo |
| `updateGame(id, data)` | PUT | /api/v1/games/:id | Actualiza un juego |
| `deleteGame(id)` | DELETE | /api/v1/games/:id | Elimina un juego |

## Tipos

Las funciones del cliente están tipadas con las interfaces definidas
en `src/types/game.ts`, alineadas con los datos que devuelve el backend.

## Estados de red

La UI gestiona tres estados en todo momento:

- **loading** — se muestra un mensaje de carga mientras llega la respuesta
- **éxito** — se muestran los datos recibidos
- **error** — se muestra un mensaje de error si la petición falla

## Fuente de verdad

Los datos viven únicamente en el backend. El frontend no usa
LocalStorage para persistir juegos — la API es la única fuente de verdad.
Cada operación CRUD actualiza el estado local en memoria para evitar
recargas innecesarias.