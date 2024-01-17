import styled, { keyframes, css } from 'styled-components';

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
    box-shadow: -10px -10px 50px 2px #000 inset;
  }

  > div {
    width: 200%;
    height: 100%;
    animation: ${spinAnimation} 40s linear alternate infinite;
    background: url('/assets/images/moon.jpg');
  }
`;

const getTopRadius = (moonStage) => {
  switch (moonStage) {
    case 'Full':
      return '150%';
    case 'First Quarter':
      return '0%';
    case 'New':
      return '1%';
    case 'Last Quarter':
      return '0%';
    default:
      return '0%';
  }
};

const getLeftRadius = (moonStage) => {
  switch (moonStage) {
    case 'Full':
      return '100%';
    case 'First Quarter':
      return '20%';
    case 'New':
      return '1%';
    case 'Last Quarter':
      return '-20%';
    default:
      return '5%';
  }
};

export const Phase = styled.section<{ phase: string }>`
  ${({ theme, phase }) => css`
  width: 390px;
  height: 390px;
  position: absolute;
  top: ${getTopRadius(phase)};
  left: ${getLeftRadius(phase)};
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  z-index: 3;
  background-color: black;
  opacity: .87;
  `}
`;
