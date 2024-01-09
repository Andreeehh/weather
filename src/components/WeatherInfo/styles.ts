import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;


  .weather-icon {
    width: 14rem;
    height: 14rem;
    object-fit: contain;
    margin-bottom: ${theme.spacings.large};
  }

  .temperature-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .temperature-info-2 {
    display: flex;
    align-items: top;
  }

  .temperature-value {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: ${theme.spacings.xtiny};
    color: ${theme.colors.gray12};
  }

  .temperature-symbol {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: ${theme.spacings.xtiny};
    color: ${theme.colors.gray12};
  }

  .temperature-label {
    font-size: 2rem;
    color: ${theme.colors.gray10};
  }
`}
`;