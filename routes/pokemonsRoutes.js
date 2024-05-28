import express from "express";
import { getPokemons } from "../controllers/pokemonsController.js";
import { validatePagination } from "../middlewares/validatePagination.js";
import { getPokemonDetails } from "../controllers/pokemonsController.js";

const router = express.Router();

router.get("/pokemons", validatePagination, getPokemons);
router.get("/pokemons/:name", getPokemonDetails);

export default router;
