const axios = require('axios')

let pokeList = []

async function loadPokemon () {
    const pokeList = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1400')
        .then(function (response) {
            return response.data
        })
    console.log(pokeList)
}

loadPokemon()