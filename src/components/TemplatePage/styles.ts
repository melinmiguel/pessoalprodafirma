import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 46px;
`;

export const BaseContent = styled.div`
  max-width: 1008px;
  min-width: 1008px;

  background: ${theme.pureWhite};
  min-height: 516px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.107845);
  border-radius: 4px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: ${theme.defaultGreen};
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  padding-top: 4px;

  color: ${theme.textParagraph};
  mix-blend-mode: normal;
`;

export const HeaderWrapper = styled.div`
  padding: 24px 24px 32px 24px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
