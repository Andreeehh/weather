import * as Styled from './styles';

export type FullCloudProps = {
  title?: string;
};

export const FullCloud = ({ title }: FullCloudProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Base />
      <Styled.Bubble1 />
      <Styled.Bubble2 />
      <Styled.Bubble3 />
      <Styled.Bubble4 />
    </Styled.Wrapper>
  );
};
