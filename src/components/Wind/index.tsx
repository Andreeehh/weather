import React from 'react';
import AirIcon from '@mui/icons-material/Air';
import * as Styled from './styles';

export type WindProps = {
  value: number; // Valor da umidade em porcentagem
};

export const Wind = ({ value }: WindProps) => {
  return (
    <Styled.Wrapper>
      <AirIcon className="wind-icon" />
      <div className="wind-info">
        <span className="wind-value">{value} Km/h</span>
        <span className="wind-label">Wind Speed</span>
      </div>
    </Styled.Wrapper>
  );
};
