import React from 'react';
import { render } from '@testing-library/react';

import Page404 from '.';

describe('<Page404 />', () => {
  it('should render without crash', () => {
    render(<Page404 />);
  });
});
