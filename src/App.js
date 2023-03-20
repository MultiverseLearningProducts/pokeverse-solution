import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import { Home, PokemonDetails, Layout } from './routes';

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
    <RouterProvider router={router}/>
  );
}

export { App };
