// components/Wind/styles.ts
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    z-index: 2;

    .wind-icon {
      font-size: 3.2rem;
      margin-right: 8px;
      color: ${theme.colors.primary}; // Cor do ícone
    }

    .wind-info {
      display: flex;
      flex-direction: column;
    }

    .wind-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${theme.colors.gray8};
    }

    .wind-label {
      font-size: 1.5rem;
      color: ${theme.colors.gray10};
    }
  `}
`;
