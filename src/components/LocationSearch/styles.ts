// components/LocationSearch/styles.ts
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .location-icon,
    .search-icon {
      font-size: 3rem;
      color: ${theme.colors.deepBlack};
    }

    .search-icon {
      cursor: pointer;
    }

    .MuiOutlinedInput-root {
      width: 100%;
      font-size: 2rem;
      border-radius: 150px;
      max-width: 300;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.primary}; /* Cor da borda normal */
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.secondary}; /* Cor da borda ao focar */
    }

    .MuiOutlinedInput-input {
      padding: 8px; /* Espaçamento interno do input */
      color: ${theme.colors.deepBlack};
    }

    :disabled {
      opacity: 0.5; /* Opacidade reduzida para indicar que está desabilitado */
      cursor: not-allowed; /* Cursor não permitido */
    }
  `}
`;
