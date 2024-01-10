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
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #87CEEB; /* Cor de fundo do céu, ajuste conforme necessário */

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
    .sun-rays {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0; /* Coloca os raios atrás do conteúdo principal */

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
        background: #FFD700; /* Cor dos raios, ajuste conforme necessário */
        box-shadow: 0 0 20px 10px #FFD700; /* Adiciona um brilho suave aos raios */
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
        animation: ${sunRaysAnimation} 2s linear infinite;
    }
    }





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
