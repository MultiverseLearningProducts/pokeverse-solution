import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FavoritesContext } from '../FavoritesProvider';

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img
        width='286'
        height='286'
        bg='dark'
        variant='top'
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as='div'>
          Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
        {favorites.some(e => e.name === name) ? (
          <Button variant='danger' onClick={() => removeFavorite(pokemon)}>
            Remove from Favorites
          </Button>
        ) : (
          <Button variant='primary' onClick={() => addFavorite(pokemon)}>
            Add to favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
