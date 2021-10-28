import React from 'react';
import {
  Container,
  Bananinha123,
  ButtonList,
  ContainerName,
  LabelTitle,
} from './styles';

const Listagem: React.FC = () => {
  return (
    <Container>
      <ContainerName>
        <LabelTitle>Nome</LabelTitle>
        <Bananinha123>NomeDoUsuario</Bananinha123>
      </ContainerName>
      <ButtonList>Boquear Usuário</ButtonList>
      <ButtonList>Desbloquear Usuário</ButtonList>
    </Container>
  );
};

export default Listagem;
