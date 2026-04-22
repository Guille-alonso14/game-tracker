# Testing

## Pruebas manuales

Todas las funcionalidades han sido probadas manualmente en el navegador.

### Página de inicio
- [x] Se muestran los juegos con estado "en progreso"
- [x] El badge de estado muestra el color correcto
- [x] Si no hay juegos en progreso se muestra mensaje vacío

### Biblioteca
- [x] Se muestran todos los juegos
- [x] El filtro por estado funciona correctamente
- [x] El filtro por plataforma funciona correctamente
- [x] Los filtros combinados funcionan correctamente

### Añadir juego
- [x] El formulario muestra errores si faltan campos obligatorios
- [x] Al añadir un juego aparece inmediatamente en la lista
- [x] El formulario se cierra al cancelar

### Detalle de juego
- [x] Se accede al detalle haciendo clic en una tarjeta
- [x] Se muestran todos los datos del juego
- [x] El botón volver funciona correctamente

### Editar juego
- [x] El formulario se rellena con los datos actuales
- [x] Los cambios se guardan y se reflejan inmediatamente
- [x] Se puede cancelar la edición sin guardar

### Eliminar juego
- [x] Aparece confirmación antes de eliminar
- [x] El juego desaparece de la lista tras eliminar
- [x] Redirige a la biblioteca tras eliminar

### Navegación
- [x] La barra de navegación funciona correctamente
- [x] La página 404 aparece en rutas no definidas
- [x] El botón volver de la 404 redirige al inicio

### Diseño responsive
- [x] La app se ve correctamente en pantalla completa
- [x] El grid de juegos se adapta al ancho de pantalla

## Bugs encontrados y corregidos

- Error de TypeScript en GameDetailPage al usar setState dentro de useEffect
  → Solucionado calculando el juego directamente con games.find()
- Error de tipos en games.controller.ts con req.params.id
  → Solucionado con una función auxiliar getId()
- Advertencia de Fast Refresh en GamesContext
  → Suprimida con eslint-disable-next-line