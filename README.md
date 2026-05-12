![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# Game Tracker 🎮

Gestiona tu biblioteca de videojuegos pendientes, en progreso y completados.

Aplicación web fullstack con autenticación de usuarios, base de datos real
y búsqueda automática de covers desde IGDB.

| Despliegue | URL |
|---|---|
| Frontend | https://game-tracker-bice.vercel.app |
| Backend | https://game-tracker-5zy4.onrender.com |

## Características

1. Registro e inicio de sesión con autenticación por email
2. Biblioteca personal — cada usuario ve solo sus juegos
3. Añadir, editar y eliminar juegos con cover automático desde IGDB
4. Cambiar el estado: pendiente, en progreso o completado
5. Filtrar por estado y plataforma
6. Sistema de recomendaciones basado en géneros y plataformas favoritas
7. Página de detalle con notas y puntuación

## Tecnologías

### Frontend

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | Interfaz de usuario y tipado |
| Tailwind CSS | Estilos y diseño responsive |
| React Router v7 | Navegación entre páginas |
| Supabase JS | Autenticación de usuarios |
| React.lazy + Suspense | Lazy loading de páginas |

### Backend

| Tecnología | Uso |
|---|---|
| Node.js + Express | Servidor y API REST |
| Supabase | Base de datos PostgreSQL |
| IGDB API | Búsqueda de covers de videojuegos |

### Auxiliares

| Tecnología | Uso |
|---|---|
| Vercel | Despliegue del frontend |
| Render | Despliegue del backend |
| Trello | Gestión del proyecto |

## Estructura del proyecto

```
game-tracker/
├── src/
│   ├── api/          # Cliente de API y Supabase
│   ├── components/   # Componentes reutilizables
│   ├── context/      # Estado global (Auth y Games)
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Páginas de la app
│   └── types/        # Tipos TypeScript
├── server/
│   └── src/
│       ├── config/       # Configuración de Supabase
│       ├── routes/       # Endpoints de la API
│       ├── controllers/  # Controladores
│       └── services/     # Lógica de negocio e IGDB
├── docs/             # Documentación del proyecto
└── README.md
```

## Tablero Trello

[Ver tablero de gestión del proyecto](https://trello.com/b/S14EPTTN/game-tracker)

## Descargar y ejecutar

```bash
git clone https://github.com/Guille-alonso14/game-tracker.git
cd game-tracker
npm install
```

Crea un archivo `.env` en la raíz con estas variables:

SUPABASE_URL=tu_supabase_url
SUPABASE_ANON_KEY=tu_supabase_anon_key
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
TWITCH_CLIENT_ID=tu_twitch_client_id
TWITCH_CLIENT_SECRET=tu_twitch_client_secret

Arranca el frontend:
```bash
npm run dev
```

Arranca el backend:
```bash
npm run server
```

## Desplegar en Vercel

**Frontend**

1. Crea una cuenta en [vercel.com](https://vercel.com) con GitHub
2. Haz clic en **Add New Project** y selecciona el repositorio
3. Añade estas variables de entorno:
   - `VITE_API_URL` → URL del backend en Render
   - `VITE_SUPABASE_URL` → URL de tu proyecto en Supabase
   - `VITE_SUPABASE_ANON_KEY` → Clave anon de Supabase
4. Haz clic en **Deploy**

**Backend**

1. Crea una cuenta en [render.com](https://render.com) con GitHub
2. Haz clic en **New** → **Web Service**
3. Selecciona el repositorio y configura:
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm run server`
4. Añade las variables de entorno: `PORT`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET`
5. Haz clic en **Create Web Service**

---

Desarrollado por Guillermo Alonso — 2026