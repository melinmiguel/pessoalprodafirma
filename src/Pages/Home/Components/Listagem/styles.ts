import styled from 'styled-components';

export const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2d62ed;
  border-radius: 6px;
  opacity: 1;
  width: 647px;
  height: 91px;
  color: #2d62ed;
  text-decoration: none;
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #2d62ed;
  opacity: 1;
  padding-left: 25px;
  font-family: system-ui;

  ::-ms-input-placeholder {
    color: #2d62ed;
  }
  ::placeholder {
    font-family: system-ui;
    color: #2d62ed;
  }
`;

export const Bananinha123 = styled.label`
  margin: 10px 10px 5px 15px;
`;

export const LabelTitle = styled.label`
  margin: 10px 10px 5px 15px;
  font-weight: 100px;
`;

export const ButtonList = styled.button`
  margin-left: 10px;
  background-color: darkBlue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
`;

export const Container = styled.div`
  background-color: WHITE;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 20px;
  border: solid 1px;
  border-color: blue;
  max-width: 850px;
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 300px;
`;
