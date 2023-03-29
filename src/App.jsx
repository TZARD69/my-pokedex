import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyTitle/>
      <PokemonCard/>

    </div>
  )
}

export default App
