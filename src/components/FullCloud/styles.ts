import styled, { css } from 'styled-components';

export const Wrapper = styled.div`

${({ theme }) => css`
  width: 100%;
  height: 100%;
  justify-content: center;
  display:  flex;
  align-items: center;
  position: absolute;
  top: -20rem;
  @media ${theme.media.lteMedium} {
    }
  `}
`;

export const Cloud = styled.div`

${({ theme }) => css`
  width: 120%;
  height: 130%;
  background: url('/assets/images/cloud-CSS.png');
  background-size: cover;
  @media ${theme.media.lteMedium} {
    width: 60rem;
    height: 30rem;
    }
  `}
`;
