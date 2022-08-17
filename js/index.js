const pokeName = document.querySelector('.poke-name')
const pokeId = document.querySelector('.poke-id')
const pokeImage = document.querySelector('.poke-card img')


async function GetPokemon (Pokemon){
	const URL = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`;

	let fetchPokemon = await fetch(URL);
	let data = await fetchPokemon.json();

	return data;

}

async function DataPokemon(pokemon){

	let dataPokemon = await GetPokemon(pokemon)
	
    pokeName.innerHTML = dataPokemon.name
    pokeId.innerHTML = dataPokemon.id
    pokeImage.src = dataPokemon['sprites']['other']['official-artwork']['front_default']
}


DataPokemon(4)