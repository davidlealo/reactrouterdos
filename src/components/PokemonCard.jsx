import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom'

function PokemonCard() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [imagenPokemon, setImagenPokemon] =useState('')
    const navigate = useNavigate()
    const volver = () => {
        navigate(`/pokemon`)
    }

    


    useEffect(() => {
        fetch(`${endpoint}/${id}`).then(resp => resp.json())
            .then(data => {
                setPokemon(data)
                setImagenPokemon(data['sprites']['other']['official-artwork']['front_default'])
            })
    }, [id])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagenPokemon} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        Weight: {pokemon.weight}
                    </Card.Text>
                    <Card.Text>
                        Base Experience: {pokemon.base_experience}
                    </Card.Text>
                    <Card.Text>
                        Height: {pokemon.height}
                    </Card.Text>
                    <Button variant="warning" onClick={volver}>Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PokemonCard