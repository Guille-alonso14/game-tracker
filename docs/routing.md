# Rutas y navegación

## Configuración

Las rutas se gestionan con React Router v6 en `App.tsx`.
El router se inicializa en `main.tsx` con `BrowserRouter`.

## Estructura de rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | HomePage | Juegos en progreso |
| `/library` | LibraryPage | Todos los juegos con filtros |
| `/game/:id` | GameDetailPage | Detalle de un juego |
| `*` | NotFoundPage | Página 404 |

## Navegación

- La barra de navegación en `App.tsx` enlaza a `/` y `/library`
- `GameCard` usa `useNavigate` para navegar a `/game/:id` al hacer clic
- `NotFoundPage` tiene un botón para volver a `/`

## Página 404

Cualquier ruta no definida renderiza `NotFoundPage` gracias al
wildcard `path="*"` al final de las rutas.