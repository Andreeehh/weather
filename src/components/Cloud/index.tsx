import * as Styled from './styles';

export type CloudProps = {
  size?: number;
  animationDuration: string;
};

export const Cloud = ({ size, animationDuration }: CloudProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Base width={size} animationDuration={animationDuration} />
    </Styled.Wrapper>
  );
};
