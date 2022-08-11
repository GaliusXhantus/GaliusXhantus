from requests import get
from pokemon import Pokemon


def get_pokemon(pokemon_id):

	url = 'https://pokeapi.co/api/v2/pokemon/'

	request = get(f'{url}{pokemon_id}')
	data = request.json()

	return data


def tipo_pokemon(data):
	tipos = data['types']
	tipos = [tipo['type']['name'] for tipo in tipos]

	return tipos


def cria_pokemon(pokemon_id):

	data = get_pokemon(pokemon_id)

	ID = data['id']
	NOME = data['name']
	TIPO = tipo_pokemon(data)
	FOTO = data['sprites']['other']['dream_world']['front_default']

	pokemon = Pokemon(ID, NOME, TIPO, FOTO)

	return pokemon


print(cria_pokemon(2))