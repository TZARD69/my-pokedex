import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'


const pokemonList = [

  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
  
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
  
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  
    {
      name: "mew",
    },
  
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0)
  
    const handleNextPokemon = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1)
      }
    }
  
    const handlePreviousPokemon = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1)
      }
    }
  
    const pokemon = pokemonList[pokemonIndex]
  
    return (
      <div className="App">
        <MyTitle />
        <PokemonCard pokemon={pokemon} />
        {pokemonIndex > 0 ? (
          <button onClick={handlePreviousPokemon}>Précédent</button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleNextPokemon}>Suivant</button>
        ) : null}
      </div>
    )
  }

export default App
