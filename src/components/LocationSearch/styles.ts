// components/LocationSearch/styles.ts
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .location-icon,
    .search-icon {
      font-size: 1.5rem;
    }

    .search-icon {
      cursor: pointer;
    }

    .MuiOutlinedInput-root {
      width: 100%;
      font-size: 1.2rem;
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
    }
  `}
`;
