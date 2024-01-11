import React, { useEffect } from 'react';
import * as Styled from './styles';
import { gsap } from 'gsap';

export interface LightBeamsProps {
  count: number; // Número de feixes de luz
  length: number; // Comprimento dos feixes de luz
}

export const LightBeams: React.FC<LightBeamsProps> = ({
  count = 15,
  length = 150,
}) => {
  useEffect(() => {
    const updateLightBeams = () => {
      const beams = document.querySelectorAll('.beam');
      gsap.to(beams, {
        duration: 1,
        height: () => Math.round(Math.random() * length),
        rotation: () => Math.round(Math.random() * 40 - 40), // Ajuste o intervalo de rotação conforme necessário
        ease: 'power0.none',
      });
    };

    updateLightBeams();
    const intervalId = setInterval(updateLightBeams, 1000);

    return () => clearInterval(intervalId);
  }, [length]);

  return (
    <Styled.Wrapper>
      {[...Array(count)].map((_, index) => (
        <Styled.LightBeam key={index} className="beam" />
      ))}
    </Styled.Wrapper>
  );
};
