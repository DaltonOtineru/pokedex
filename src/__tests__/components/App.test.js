import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('App Component', () => {
  test('it renders', async () => {
    render(<App />);

    const pokemonList = await waitFor(() => screen.getByTestId('pokemon-list'));
    expect(pokemonList).toBeInTheDocument();
  });
});
