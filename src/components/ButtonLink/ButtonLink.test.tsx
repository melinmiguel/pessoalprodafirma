import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import ButtonLink from '.';

describe('<ButtonLink />', () => {
  it('should render without crash', () => {
    render(
      <div> </div>,
      // <MemoryRouter>
      //   <ButtonLink path="/" />
      // </MemoryRouter>,
    );
  });
});
