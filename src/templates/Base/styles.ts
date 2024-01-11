import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  backgroundUrl: string;
}>`
${({ theme, backgroundUrl }) => css`
  width: 100%;
  height: 100vh;
  position: flex;
  background: url(${backgroundUrl});
  background-size: cover;
`}
`;

export const Content = styled.div`
    ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  `}
`;
