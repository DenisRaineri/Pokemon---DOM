const pokemons = get.elementsById("pokemon")

for(i = 0; i < pokemons.length; i++) {
  fetch(`http:localhost:1234/${pokemons}`).then(response => {
    response.text().then(body => {
      console.log(body);
    })
  })
}
