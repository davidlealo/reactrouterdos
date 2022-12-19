import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useParams, useNavigate} from 'react-router-dom'

function PokemonCard() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    const volver = () => {
        navigate(`/pokemon`)
    }


    

    useEffect (() => {
    fetch(`${endpoint}/${id}`).then(resp => resp.json())
       .then(data => {
           setPokemon(data)
        })
    },[id])

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
        Weight: {pokemon.weight}
        </Card.Text>
        <Button variant="warning" onClick={volver}>Volver</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PokemonCard