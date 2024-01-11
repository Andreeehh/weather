import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

export interface StormRaysProps {
  count: number; // Número de raios
  length: number; // Comprimento dos raios
  thickness: number; // Espessura dos raios
  animationEnabled?: boolean; // Ativar ou desativar a animação
}

const generateRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const StormRays: React.FC<StormRaysProps> = ({
  count = 10,
  length = 10,
  thickness = 10,
  animationEnabled = true,
}) => {
  const [rayDelays, setRayDelays] = useState<number[]>([]);

  useEffect(() => {
    // Gere atrasos aleatórios para criar uma aparência natural
    const delays = Array.from({ length: count }, () =>
      generateRandomValue(0, 1),
    );
    setRayDelays(delays);
  }, [count]);

  return (
    <Styled.Wrapper>
      {rayDelays.map((delay, index) => (
        <Styled.Ray
          key={index}
          length={length}
          thickness={thickness}
          delay={delay}
          style={{
            left: `${index * (thickness + 10)}px`, // Adapte conforme necessário
          }}
        />
      ))}
    </Styled.Wrapper>
  );
};
