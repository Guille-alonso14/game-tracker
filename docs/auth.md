# Autenticación

## Supabase Auth

La autenticación se gestiona con Supabase Auth usando email y contraseña.

## Flujo de registro

1. El usuario introduce email y contraseña en `AuthPage`
2. Se llama a `supabase.auth.signUp()`
3. Supabase envía un email de confirmación
4. El usuario confirma el email y ya puede iniciar sesión

## Flujo de inicio de sesión

1. El usuario introduce email y contraseña
2. Se llama a `supabase.auth.signInWithPassword()`
3. Supabase devuelve una sesión con el `user.id`
4. El contexto `AuthContext` guarda el usuario en el estado global
5. La app muestra el contenido protegido

## Protección de rutas

En `App.tsx` se comprueba si hay un usuario autenticado. Si no lo hay
se muestra `AuthPage` en lugar del contenido de la app.

```tsx
if (!user) return <AuthPage />
```

## Envío del usuario al backend

El frontend envía el `user.id` en cada petición como header:

El backend lee este header y filtra los datos por usuario.

## Cierre de sesión

Se llama a `supabase.auth.signOut()` desde el botón de la navbar.
El contexto detecta el cambio y redirige al login automáticamente.