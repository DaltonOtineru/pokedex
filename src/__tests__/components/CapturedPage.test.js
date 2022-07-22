import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CapturedPage from '../../pages/CapturedPage';
import { MemoryRouter } from 'react-router-dom';

describe('Captured Page', () => {
  test('it renders', () => {
    render(
      <MemoryRouter>
        <CapturedPage />
      </MemoryRouter>
    );
  });
});
