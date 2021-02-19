import React from 'react';
// import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ButtonLinkProps {
  path: string;
  outline?: true | false;
  externalURL?: true | false;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  path,
  outline = false,
  externalURL = false,
  children,
}) => {
  return (
    <Container outline={outline}>
      {/* {externalURL ? (
        <a href={path}>{children}</a>
      ) : (
        <Link to={path}>{children}</Link>
      )} */}
    </Container>
  );
};

export default ButtonLink;
