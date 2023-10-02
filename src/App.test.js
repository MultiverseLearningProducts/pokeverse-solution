/** @jest-environment jsdom */
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { App } from './App';
const initialFetch = window.fetch;

describe('App', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
              },
              {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
              },
              {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
              },
              {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
              }          
            ],
          }),
      })
    );
  });
  afterEach(() => {
    window.fetch = initialFetch;
  });

  it('Should render', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText("Pokeverse")).toBeTruthy();
  });

  it('pokemon cards are rendered', async () => {
    
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByText("bulbasaur")).toBeTruthy();
  });


});
