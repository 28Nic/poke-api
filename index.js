const axios = require('axios')

let pokeDex = []

async function loadPokemon () {
    pokeList = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1400')
        .then(function (response) {
         return response.data.results
        })
        .catch(function (error){
            //handle error
            console.log(error)
        })

    for await (pokemon of pokeList){
        let pokemonData = await axios.get(pokemon.url)
            .then(function (response){
                return response.data
            })
            .catch (function(error){
                //handle error
                console.log(error)
            })
        pokeDex.push(pokemonData)
    }

    console.log(pokeDex.filter((pokemon) => {
        pokemon.types[0].type.name === 'fighting' && base.experience < 110
    }))
}

loadPokemon()

