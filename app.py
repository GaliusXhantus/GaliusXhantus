from flask import Flask
from flask import render_template


from pokedex import cria_pokemon


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<ID>')
def poke_search(ID):
    pokemon = cria_pokemon(ID)
    return render_template('index.html', pokemon=pokemon)


if __name__ == '__main__':
    app.run(debug=True)
