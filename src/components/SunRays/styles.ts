import styled, { css, keyframes } from 'styled-components';

const sunRaysAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
  .first-ray {
      left: -45%;
    }
    .second-ray {
      left: -30%;
    }
    .third-ray {
      left: -15%;
    }
    .fourth-ray {
      left: 0;
    }
    .fifth-ray {
      left: 15%;
    }
    .sixth-ray {
      left: 30%;
    }
    .seventh-ray {
      left: 45%;
    }
    .eighth-ray {
      left: 60%;
    }
    .sun-rays {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
        background: #FFD700;
        box-shadow: 0 0 20px 10px #FFD700;
        animation: ${sunRaysAnimation} 2s linear infinite;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 45%;
        transform: translate(-50%, -50%) rotate(90deg);
        width: 1px;
        height: 100%;
        background: #FFD700;
        box-shadow: 0 0 20px 10px #FFD700;
        animation: ${sunRaysAnimation} 3s linear infinite;
    }
    }

  `}
`;
