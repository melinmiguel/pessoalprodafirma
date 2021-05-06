import React from 'react';
import ButtonLink from '../../components/ButtonLink';
import svg404 from '../../assets/svg/404.svg';
import { Card, Container } from './styles';

const Page404: React.FC = () => {
  return (
    <Container>
      <img alt="Cartões Alelo" src={svg404} />
      <Card>
        <h1>
          <span>Desculpe,</span>
          mas não conseguimos encontrar a página que você está procurando.
        </h1>
        <p>
          Verifique se você digitou corretamente o endereço desejado ou o
          conteúdo pode não estar mais disponível no momento.
        </p>
      </Card>
    </Container>
  );
};
// so validando
export default Page404;
