import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  width: 960px;
  margin: 100px auto;
  min-height: 60vh;

  img {
    position: absolute;
    top: 85px;
    right: 0;
  }

  h1 {
    font-size: 32px;
    margin: 10px 0;
    font-weight: 700;
    line-height: 40px;

    span {
      display: block;
      color: ${theme.defaultGreen};
    }
  }

  p {
    margin-top: 10px;
  }

  a {
    margin-top: 30px;
  }
`;

export const Card = styled.div`
  position: absolute;
  z-index: 2;
  background: ${theme.pureWhite};
  border: 1px solid ${theme.lightGrey2};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.107845);
  padding: 32px;
  width: 480px;

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 25px;
  }

  a {
    width: 200px;
  }
`;
