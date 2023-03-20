import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import { Navigation } from '../components/Navigation';

function Layout() {

  return (
      <div data-testid='app'>
        <Navigation />

        {/* child routes will be rendered in Outlet */}
        <Outlet />
      </div>
  );
}

export { Layout };
