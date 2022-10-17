import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon1, setPokemon1] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass",
    evolved: false,
    weight: 6.9,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    id: 0
  })

  function evoluir1() {
    setPokemon1({... pokemon1, name:"Pikachu", weight: 6, image: "https://archives.bulbagarden.net/media/upload/archive/0/0d/20100904002342%21025Pikachu.png"})
  }

  function evoluir2() {
    setPokemon2({... pokemon2, name:"Ivysaur", weight: 13, image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png"})
  }
  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard name= {pokemon1.name}
      image= {pokemon1.image}
      color= {pokemon1.color} 
      type= {pokemon1.type}
      weight= {pokemon1.weight}
      evoluindo={evoluir1}
      />
      <PokemonCard name= {pokemon2.name}
      image= {pokemon2.image}
      color= {pokemon2.color} 
      type= {pokemon2.type}
      weight= {pokemon2.weight}
      evoluindo={evoluir2}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
