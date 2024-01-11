import { Rain } from 'react-rainfall';
import * as Styled from './styles';
export type RainProps = {
  numDrops: number;
};

export const RainComponent = ({ numDrops }: RainProps) => {
  return (
    <Styled.Wrapper>
      <Rain
        numDrops={numDrops}
        showImpact={true}
        dropletColor={'rgb(0, 40, 116)'}
      />
    </Styled.Wrapper>
  );
};
