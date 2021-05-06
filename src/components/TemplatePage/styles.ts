import styled from 'styled-components';
import imagemLateralPNG from '../../assets/images/imagemLateral.png';
import Logo from '../../assets/images/Logo.png';

export const Container = styled.div`
  display: flex;
`;

export const ContainerEsquerdo = styled.div`
  width: 50vw;
  align-items: center;
  justify-content: center;
  display: inline-grid; //alterar para box e ajustar nas margens.
  grid: auto;
`;

export const LogoContainer = styled.div`
  background-image: url(${Logo});
  width: 150px;
  height: 150px;
  margin-left: 25vh;
`;

export const ContainerDireito = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${imagemLateralPNG});
`;

export const InputLogin = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2d62ed;
  border-radius: 6px;
  opacity: 1;
  width: 647px;
  height: 91px;

  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  padding-left: 25px;
  ::-ms-input-placeholder {
    color: #2d62ed;
  }
  ::placeholder {
    color: #2d62ed;
  }
`;

export const InputSenha = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2d62ed;
  border-radius: 6px;
  opacity: 1;
  width: 647px;
  height: 91px;
  color: #2d62ed;

  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  padding-left: 25px;
  ::-ms-input-placeholder {
    color: #2d62ed;
  }
  ::placeholder {
    color: #2d62ed;
  }
`;

export const BotaoEntrar = styled.button`
  background: #2d62ed 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  width: 672px;
  height: 91px;

  text-align: center;
  font: normal normal bold 26px/39px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export const TextContainer = styled.div`
  position: relative;
  width: 672px;
  height: 91px;
  text-align: center;
  font: normal normal 600 26px/39px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
`;
