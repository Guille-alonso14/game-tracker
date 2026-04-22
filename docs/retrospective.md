# Retrospectiva

## Qué he aprendido

El aprendizaje más importante de este proyecto ha sido entender cómo
se conecta un frontend con un backend. Antes del proyecto no sabía
cómo funcionaba esa comunicación — ahora entiendo el flujo completo
desde que un componente React hace una petición hasta que el servidor
Express responde con datos.

También he aprendido a estructurar un proyecto fullstack con separación
de responsabilidades: el frontend consume la API, la API llama al
controlador, el controlador llama al servicio. Cada capa tiene una
función clara.

## Principales problemas encontrados

### Hooks de React
Los hooks fueron la parte más difícil de entender, especialmente
useCallback y por qué es necesario usarlo para evitar renders
innecesarios y bucles infinitos en useEffect. También tuve problemas
con el linter que no permitía llamar a setState directamente dentro
de un useEffect.

### Despliegue del backend
El mayor bloqueo del proyecto fue desplegar el backend. Railway detectaba
el proyecto como un sitio estático de Vite en lugar de un servidor
Node.js, por lo que el backend no arrancaba. Tras varios intentos
fallidos se migró a Render, que funcionó correctamente desde el primer
intento configurando el runtime como Node, el build command como
"npm install" y el start command como "npm run server".

### Integración frontend-API
Al conectar el frontend con el backend surgieron errores de TypeScript
en el controlador con req.params.id y problemas con el linter en
useGames y GameDetailPage que hubo que corregir.

## Cómo he usado la IA

He usado Claude como guía durante todo el desarrollo. La IA me ha
ayudado a entender los conceptos antes de implementarlos, a generar
el código base de cada archivo y a resolver los errores que iban
apareciendo en TypeScript y en el linter. Sin esta guía el tiempo
necesario para completar el proyecto habría sido significativamente
mayor.

## Reflexión final

Este proyecto me ha dado una visión completa del desarrollo fullstack:
desde la definición de la idea y la gestión con Trello hasta el
despliegue en producción con Vercel y Render. He trabajado con
React, TypeScript, Tailwind, Express y Git de forma integrada,
lo que me ha dado una base sólida para seguir aprendiendo.