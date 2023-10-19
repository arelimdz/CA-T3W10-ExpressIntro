const express = require('express');

const {checkForAlex} = require("./PokemonMiddleware")

// create an instance of the Express router 

const router = express.Router();


// GET /pokemon/25 
router.get("/:numberOfLePokemon", async (request, response) => {
	let pokemonId = request.params.numberOfLePokemon;

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/" +  pokemonId);
	let data = await result.json();

	response.json({
		name: data.name
	});
});


/*
router.post(
	"/",
	checkForAlex,
	someOtherMiddleware,
	WhateverMiddlewareWeCreated,
	BlahBlahBlah,
	async (request, response) => {}
)
*/



// POST /pokemon/
router.post("/", checkForAlex, async (request, response) => {
	

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + request.body.pokemonId);
	let data = await result.json();

	response.json({
		name: data.name,
		username: request.body.username,
		pokemonId: request.body.pokemonId  
	});
});


router.get("/bananas", async (request, response) => {

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/25");
	let data = await result.json();


	response.json({
		message: "bananas!",
		pokemonName: data.name
	});
});


// Create out of CRUD 
// router.post("/", (request, response) => {
// 	response.json({
// 		message:"POST request received!"
// 	})
// });

// router.get("/", (request, response) => {
// 	response.json({
// 		message:"Hello world from a router!"
// 	});
// });




module.exports = router;

// module.exports = {
// 	PokemonRouter: router
// }


