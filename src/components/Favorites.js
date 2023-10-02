import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import { FavoriteCard } from './FavoriteCard';
import { Container, Row, Col } from 'react-bootstrap';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <Container>
      <Row className='g-4'>
        {favorites.map((pokemon) => (
          <Col key={pokemon.name}>
            <FavoriteCard poke = {pokemon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favorites };