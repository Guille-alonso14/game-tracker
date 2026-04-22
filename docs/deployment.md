# Despliegue

## Frontend — Vercel

El frontend está desplegado en Vercel conectado al repositorio de GitHub.
Cada push a main genera un deploy automático.

URL: https://game-tracker-bice.vercel.app

### Proceso
1. Crear cuenta en vercel.com con GitHub
2. Importar repositorio game-tracker
3. Añadir variable de entorno VITE_API_URL con la URL del backend
4. Deploy automático

## Backend — Render

El backend está desplegado en Render como Web Service Node.js.

URL: https://game-tracker-5zy4.onrender.com

### Proceso
1. Crear cuenta en render.com con GitHub
2. New → Web Service → seleccionar repositorio
3. Runtime: Node, Build Command: npm install, Start Command: npm run server
4. Añadir variable de entorno PORT=3000

## Variables de entorno

### Frontend (Vercel)
- VITE_API_URL=https://game-tracker-5zy4.onrender.com/api/v1

### Backend (Render)
- PORT=3000

## Notas

Se intentó desplegar el backend en Railway pero detectaba el proyecto
como sitio estático de Vite en lugar de servidor Node.js. Se migró
a Render que funcionó correctamente desde el primer intento.