import React from 'react'

function NavBar(props) {

  return (
    <div className="NavBar">
      {props.pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => props.onSelect(index)}>{pokemon.name}</button>
      ))}
    </div>
  );
}

export default NavBar;
