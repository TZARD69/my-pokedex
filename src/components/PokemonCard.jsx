import PropTypes from "prop-types"


function PokemonCard(props){
  console.log(props);
   const pokemon = props.pokemon[0];

   return(
  
    <figure className="card">
       {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt="image Pokemone bulbasaur" className="card-img"/>) : (<p>???</p>)}       
        <figcaption>{pokemon.name}</figcaption>
    </figure>)
   
}
PokemonCard.propTypes = {
  pokemon: PropTypes.arrayOf( PropTypes.shape({
    name:PropTypes.string.isRequired,
    imgSrc: PropTypes.string, 
  })).isRequired,
};


  export default PokemonCard;