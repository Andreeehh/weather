import styled, { css } from 'styled-components';

export const Wrapper = styled.div`

${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid ${theme.colors.secondaryRgba};
  max-width: 45rem;
  padding: 16px;
  width: 100%;
  z-index: 2;
  position: relative;

  &:hover::before {
    opacity: 1;
  }

  &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: opacity: 500ms;
      border-radius: inherit;
      background: radial-gradient(
        200px circle at var(--mouse-x) var(--mouse-y),
        ${theme.colors.secondaryRgba},
        transparent
        )
    }

  .weather-details {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
  `}
`;

export const Invalid = styled.span`
  ${({ theme }) => css`
      font-weight: bold;
      margin: ${theme.spacings.medium} 0;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.info}
  `}
`;
