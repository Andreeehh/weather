import React from 'react';
import OpacityIcon from '@mui/icons-material/Opacity';
import * as Styled from './styles';

export type HumidityProps = {
  value: number; // Valor da umidade em porcentagem
};

export const Humidity = ({ value }: HumidityProps) => {
  return (
    <Styled.Wrapper>
      <OpacityIcon className="humidity-icon" />
      <div className="humidity-info">
        <span className="humidity-value">{value}%</span>
        <span className="humidity-label">Humidity</span>
      </div>
    </Styled.Wrapper>
  );
};
