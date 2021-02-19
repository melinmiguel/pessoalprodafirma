import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

interface ContainerProps {
  outline?: boolean;
}

export const Container = styled.div<ContainerProps>`
  a {
    display: flex;
    align-content: center;
    justify-content: center;

    cursor: pointer;

    padding: 11px 22px;

    min-width: 102px;
    max-height: 43px;

    border: 1px solid;
    box-sizing: border-box;
    border-radius: 8px;

    font-size: 14px;
    line-height: 21px;
    font-weight: 500;

    text-align: center;
    text-transform: uppercase;

    ${(props) =>
      props.outline
        ? css`
            color: ${theme.defaultGreen};
            background: ${theme.pureWhite};

            &:hover {
              color: ${theme.defaultGreen};
              background: ${theme.lightGreen};
            }
          `
        : css`
            color: ${theme.pureWhite};
            background: ${theme.defaultGreen};

            &:hover {
              background: ${theme.darkGreen};
            }
          `};

    outline: none;
    transition: all 150ms;
  }
`;
