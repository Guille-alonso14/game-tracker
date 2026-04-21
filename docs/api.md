# API

## Base URL
http://localhost:3000/api/v1

## Endpoints

### GET /games
Devuelve todos los juegos.

**Response 200:**
```json
[
  {
    "id": "uuid",
    "title": "The Witcher 3",
    "platform": "PC",
    "genre": "RPG",
    "status": "in-progress",
    "hoursEstimated": 100,
    "notes": "Estoy en Skellige",
    "createdAt": "2026-04-21T10:40:34.851Z"
  }
]
```

### GET /games/:id
Devuelve un juego por su id.

**Response 200:** objeto Game  
**Response 404:** `{ "error": "Juego no encontrado" }`

### POST /games
Crea un juego nuevo.

**Body:**
```json
{
  "title": "Hollow Knight",
  "platform": "PC",
  "genre": "Metroidvania",
  "status": "pending",
  "hoursEstimated": 40
}
```

**Response 201:** objeto Game creado  
**Response 400:** `{ "error": "Faltan campos obligatorios" }`

### PUT /games/:id
Actualiza un juego existente.

**Body:** cualquier campo de Game  
**Response 200:** objeto Game actualizado  
**Response 404:** `{ "error": "Juego no encontrado" }`

### DELETE /games/:id
Elimina un juego.

**Response 200:** `{ "message": "Juego eliminado" }`  
**Response 404:** `{ "error": "Juego no encontrado" }`

## Arquitectura del backend

- **routes/** — define los endpoints y los conecta con los controladores
- **controllers/** — recibe las peticiones, valida y llama a los servicios
- **services/** — contiene la lógica de negocio y accede a los datos
- **config/** — datos mock en memoria