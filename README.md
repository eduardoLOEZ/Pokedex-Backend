# Pokédex Backend

Este proyecto es el backend para una aplicación de Pokédex. Utiliza Node.js con Express para manejar las solicitudes HTTP y se comunica con la PokeAPI para obtener datos sobre los Pokémon.

```plaintext
pokedex-api/
├── controllers/
│   └── pokemonsController.js
├── models/
│   └── Pokemon.schema.js
├── routes/
│   └── pokemons.js
├── middleware/
│   └── validatePagination.js
├── DB/
│   └── dbconnection.js
├
├── main.js
└── package.json
```


## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- npm (versión recomendada: 6.x o superior)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

 **Dependencias**:
   - express: ^4.19.2
   - axios: ^1.7.2
   - cors: ^2.8.5


```bash
npm install

## Instalación

1. Clona el repositorio:
git clone https://github.com/eduardoLOEZ/Pokedex-Backend.git
cd Pokedex-Backend

npm install

```
## Iniciar el servidor
```bash
node src/main.js

```

## Rutas de la API
- GET /api/pokemons - Obtener todos los Pokémon
- GET /api/pokemons/:name - Obtener un Pokémon por nombre 



[!(https://pokedex-backend-ooi4.onrender.com)
