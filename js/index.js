const main = document.querySelector('main')

async function GetPokemon (Pokemon){
	const URL = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`;

	let fetchPokemon = await fetch(URL);
	let data = await fetchPokemon.json();

	return data;

}


function CreateElement(tag, className){
	const element = document.createElement(tag);
	element.className = className;

	return element;
}


async function RenderPokemon(pokemon){

	const dataPokemon = await GetPokemon(pokemon);
	const pokeCard = CreateElement('div', 'poke-card');
	const pokeImagediv = CreateElement('div', 'poke-image-div');
	const pokeImage = CreateElement('img', 'poke-image');
	const pokeId = CreateElement('p', 'poke-id');
	const pokeName = CreateElement('p', 'poke-name');

	main.appendChild(pokeCard);
	pokeCard.appendChild(pokeImagediv);
	pokeImagediv.appendChild(pokeImage);
	pokeCard.appendChild(pokeId);
	pokeCard.appendChild(pokeName);
	

    pokeImage.src = dataPokemon['sprites']['other']['official-artwork']['front_default'];
	pokeId.innerHTML = dataPokemon.id;
	pokeName.innerHTML = dataPokemon.name;
}


async function onload(pokemons){
	
	for (let pokemon = 1; pokemon < pokemons; pokemon++) {
		await RenderPokemon(pokemon);
		
	}
	

}
onload(152);