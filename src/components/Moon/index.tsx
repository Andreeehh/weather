// Moon.js
import React from 'react';
import * as Styled from './styles';
import { Moon as MoonPhase } from 'lunarphase-js';

const getAgeString = (age: number): string => {
  if (age < 1.84566) return 'New';
  else if (age < 12.91963) return 'First Quarter';
  else if (age < 16.61096) return 'Full';
  else if (age < 27.68493) return 'Last Quarter';
  return 'New';
};

export const Moon = () => {
  const phase = getAgeString(MoonPhase.lunarAge());
  return (
    <Styled.Wrapper>
      <div></div>
      <Styled.Phase phase="Waxing Gibbous"></Styled.Phase>
    </Styled.Wrapper>
  );
};
