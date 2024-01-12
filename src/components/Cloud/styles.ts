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
    margin-top: ${width * 0.325}vw;
    background: #F0F0F0;
    background: linear-gradient(top, #F0F0F0 5%, #FFFFFF 100%);
    background: -webkit-linear-gradient(top, #F0F0F0 5%, #FFFFFF 100%);
    background: -moz-linear-gradient(top, #F0F0F0 5%, #FFFFFF 100%);
    background: -ms-linear-gradient(top, #F0F0F0 5%, #FFFFFF 100%);
    background: -o-linear-gradient(top, #F0F0F0 5%, #FFFFFF 100%);
    width: ${width}vw;
    height: ${width / 2}vw;
    border-radius:  ${width / 2}vw;
    z-index: 1;
    animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;

export const Bubble1 = styled.div<{ size: number; animationDuration: string }>`
${({ size, animationDuration }) => css`
      margin-top: ${size * 0.225}vw;
      width: ${size}vw;
      height: ${size}vw;
      background: #fff;
      position: absolute;
      border-radius: 50%;
      left: ${size * 0.15}vw;
      background: #F0F0F0;
      animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;

export const Bubble2 = styled.div<{ size: number; animationDuration: string }>`
${({ size, animationDuration }) => css`
      margin-top: ${size * 0.225}vw;
      width: ${size}vw;
      height: ${size}vw;
      background: #fff;
      position: absolute;
      border-radius: 50%;
      left: ${size * 0.5}vw;
      background: #F0F0F0;
      animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;

export const Bubble3 = styled.div<{ size: number; animationDuration: string }>`
${({ size, animationDuration }) => css`
      margin-top: ${size}vw;
      background: #fff;
      position: absolute;
      border-radius: 50%;
      left: ${size * 0.5}vw;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
      background: #F0F0F0;
      animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;

export const Bubble4 = styled.div<{ size: number; animationDuration: string }>`
${({ size, animationDuration }) => css`
      margin-top: ${size * 0.015}vw;
      width: ${size}vw;
      height: ${size}vw;
      background: #fff;
      position: absolute;
      border-radius: 50%;
      left: ${size * 0.2}vw;
      background: #F0F0F0;
      animation: ${moveClouds} ${animationDuration} linear infinite;
  `}
`;
