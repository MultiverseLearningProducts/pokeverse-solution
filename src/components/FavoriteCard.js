import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FavoritesContext } from '../FavoritesProvider';

function FavoriteCard({ poke }) {
  const [pokemon, setPokemon] = useState(poke);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  console.log(favorites)
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
        <Card.Title>{poke.name}</Card.Title>
        <Card.Text as='div'>
          Abilities:
          <ul>
            {poke?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
        {favorites.some(e => e.name === poke.name) ? (
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

export { FavoriteCard };
