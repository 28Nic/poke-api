const axios = require('axios')

let pokeList = []

async function loadPokemon () {
    pokeList = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1400')
        .then(function (response) {
         return response.data.results
        })
        .catch(function (error){
            //handle error
            console.log(error)
        })

}

loadPokemon()


pokeList.filter((pokemon) => {

})