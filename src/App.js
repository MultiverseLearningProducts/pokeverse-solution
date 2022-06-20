import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Favorites, Home, PokemonDetails, Layout } from './routes';
import { FavoritesProvider } from './FavoritesProvider';

import { loader } from './routes/Home';
import { loader as detailsLoader } from './routes/PokemonDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} loader={loader}  />
      <Route path='/:name' element={<PokemonDetails />} loader={detailsLoader} />
      <Route path='/favorites' element={<Favorites />} />
    </Route>
  )
);

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router}/>
    </FavoritesProvider>
  );
}

export { App };
