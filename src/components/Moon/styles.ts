import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  top: 10%;
  left: 10%;
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-color: #000;
    border-radius: 50%;
    box-shadow: -40px -40px 50px 2px #000 inset;
  }

  > div {
    width: 200%;
    height: 100%;
    animation: ${spinAnimation} 40s linear alternate infinite;
    background: url('/assets/images/moon.jpg');
  }
`;
