import * as Styled from './styles';

export type CloudProps = {
  size?: number;
  animationDuration: string;
};

export const Cloud = ({ size, animationDuration }: CloudProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Base width={size} animationDuration={animationDuration} />
      <Styled.Bubble1 size={size * 0.4} animationDuration={animationDuration} />
      <Styled.Bubble2 size={size * 0.6} animationDuration={animationDuration} />
      <Styled.Bubble3 size={size * 0.6} animationDuration={animationDuration} />
      <Styled.Bubble4 size={size * 0.6} animationDuration={animationDuration} />
    </Styled.Wrapper>
  );
};
