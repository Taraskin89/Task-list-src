import React from 'react';
import { render } from '@testing-library/react';

import App from '../../src/App';

describe('App', () => {
  test('render App component', () => {
    render(<App />);
  });
});
