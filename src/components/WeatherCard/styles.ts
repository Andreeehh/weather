import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 45rem;
  padding: 16px;
  width: 100%;
  z-index: 2;

  .weather-details {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
`;
