import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from './index';

describe('Layout Component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('it should render the sideNav', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <Layout>
          <div>dummy</div>
        </Layout>
      </MemoryRouter>,
    );

    const sideNav = await findByTestId(/sideNav/i);

    expect(sideNav).toBeInTheDocument();
  });

  test('it should render the content', async () => {
    const { findByTestId } = render(
      <MemoryRouter>
        <Layout>
          <div>dummy</div>
        </Layout>
      </MemoryRouter>,
    );

    const contentArea = await findByTestId(/contentArea/i);

    expect(contentArea).toBeInTheDocument();
  });
});
