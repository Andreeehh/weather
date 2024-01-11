import styled, { keyframes, css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
    position: absolute;
    margin-top: 15rem;
`;

export const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Ray = styled.div<{
  length: number;
  thickness: number;
  delay: number;
}>`
  position: relative;
  width: ${({ thickness }) => thickness}px;
  height: ${({ length }) => length}px;
  background-color: #fbff00;
  clip-path: polygon(
    50% 0%,
    58% 58%,
    0% 50%,
    58% 100%,
    50% 100%,
    100% 50%,
    50% 0%
  );
  transform-origin: bottom;
  margin-right: 5rem;
  z-index: 2;
  transform: rotate(45deg);
  animation: ${({ delay }) =>
    css`${fadeInOut} 1.5s ${delay}s infinite alternate`};
`;
