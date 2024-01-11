import Snowfall from 'react-snowfall';
import * as Styled from './styles';
export type SnowFallProps = {
  numDrops: number;
};

export const SnowFall = ({ numDrops }: SnowFallProps) => {
  return (
    <Styled.Wrapper>
      <Snowfall snowflakeCount={numDrops} />
    </Styled.Wrapper>
  );
};
