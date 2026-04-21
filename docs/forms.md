# Formularios

## GameForm

Formulario controlado reutilizable para añadir y editar juegos.

**Props:**
- `initialData?: Partial<GameFormData>` — datos iniciales para edición
- `onSubmit: (data: GameFormData) => Promise<void>` — callback al enviar
- `onCancel: () => void` — callback al cancelar
- `submitLabel?: string` — texto del botón de envío (por defecto "Guardar")

**Campos:**
- Título (obligatorio)
- Plataforma (select obligatorio)
- Género (obligatorio)
- Estado (select obligatorio)
- Horas estimadas (número, mínimo 0)
- Puntuación (número opcional, 0-10)
- Notas (texto libre opcional)

**Validaciones:**
- Título y género no pueden estar vacíos
- Horas estimadas no pueden ser negativas
- Puntuación debe estar entre 0 y 10

**Gestión de estado:**
- `form` — estado de todos los campos del formulario
- `errors` — mensajes de error por campo
- `submitting` — evita doble envío mientras se procesa

**Uso para añadir:**
```tsx
<GameForm
  onSubmit={async (data) => { await addGame(data) }}
  onCancel={() => setShowForm(false)}
  submitLabel="Añadir juego"
/>
```

**Uso para editar:**
```tsx
<GameForm
  initialData={game}
  onSubmit={async (data) => { await editGame(game.id, data) }}
  onCancel={() => setEditing(false)}
  submitLabel="Guardar cambios"
/>
```