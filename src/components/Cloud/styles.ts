import styled, { css, keyframes } from 'styled-components';

const moveClouds = keyframes`
  0% {
    margin-left: 100%;
  }
  100% {
    margin-left: -100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Base = styled.div<{ width: number; animationDuration: string }>`
  ${({ width, animationDuration }) => css`
    margin-top: ${width * 0.325}vh;
    width: ${width}vh;
    height: ${width / 2}vh;
    border-radius:  ${width / 2}vh;
    background: url('/assets/images/blue-clouds-CSS.png');
  background-size: cover;
    z-index: 1;
    animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;
