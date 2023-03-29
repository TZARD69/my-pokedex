function PokemonCard(props){
  console.log(props);
   const pokemon = props.pokemon[0];

   return(
  
    <figure className="card">
       {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt="image Pokemone bulbasaur" className="card-img"/>) : (<p>???</p>)}       
        <figcaption>{pokemon.name}</figcaption>
    </figure>)
   
}


  export default PokemonCard;