import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = (evoluindo) => {
        console.log("Cliquei no botão de evoluir")
        evoluindo()
    }
    

  return (
    <Card color={props.color}>
        <img src={props.image} alt={`Pokemon`}/>
        <PokemonName>{props.name}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(props.evoluindo)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard