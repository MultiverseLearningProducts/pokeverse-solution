import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import { Favorites, Home, PokemonDetails, Layout } from './routes';
import { FavoritesProvider } from './FavoritesProvider';

import { loader } from './routes/Home';
import { loader as detailsLoader } from './routes/PokemonDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader,
      },
      {
        path: '/:name',
        element: <PokemonDetails />,
        loader: detailsLoader,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);

// // alternate syntax using JSX
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Layout />}>
//       <Route path='/' element={<Home />} loader={loader}  />
//       <Route path='/:name' element={<PokemonDetails />} loader={detailsLoader} />
//     </Route>
//   )
// );

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router}/>
    </FavoritesProvider>
  );
}

export { App };
