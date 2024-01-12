import { Rain } from 'react-rainfall';
import * as Styled from './styles';
import { theme } from '../../styles/theme';
export type RainProps = {
  numDrops: number;
};

export const RainComponent = ({ numDrops }: RainProps) => {
  return (
    <Styled.Wrapper>
      <Rain
        numDrops={numDrops}
        showImpact={true}
        dropletColor={theme.colors.rain as `rgb(${string},${string},${string})`}
      />
    </Styled.Wrapper>
  );
};
