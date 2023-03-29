function PokemonCard(){
  
   const pokemon = pokemonList[0]

   return(
  
    <figure className="card">
       {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="image Pokemone bulbasaur" className="card-img"/> : <p>???</p>}       
        <figcaption>{pokemon.name}</figcaption>
    </figure>)
   
}


const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  export default PokemonCard;