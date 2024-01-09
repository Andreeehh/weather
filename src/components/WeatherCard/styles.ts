import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  padding: 16px;

  .weather-details {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
  `}
`;
