import { Link } from 'react-router-dom';
import React from 'react';
import { Li, Ul, Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <Link to="/"> Home </Link>
        </Li>
        <Li>
          <Link to="/filmes"> Filmes </Link>
        </Li>
        <Li>
          <Link to="/series"> Series </Link>
        </Li>
        <Li>
          <Link to="/documentarios"> Documentários </Link>
        </Li>
        <Li>
          <Link to="/Shows"> Shows </Link>
        </Li>
        <Li>
          <Link to="/Blog"> Blog </Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default NavBar;
