import * as Styled from './styles';

export type SunRaysProps = {
  title?: string;
};

export const SunRays = ({ title }: SunRaysProps) => {
  return (
    <Styled.Wrapper>
      <div className="sun-rays first-ray"></div>
      <div className="sun-rays second-ray"></div>
      <div className="sun-rays third-ray"></div>
      <div className="sun-rays fourth-ray"></div>
      <div className="sun-rays fifth-ray"></div>
      <div className="sun-rays sixth-ray"></div>
      <div className="sun-rays seventh-ray"></div>
      <div className="sun-rays eighth-ray"></div>
    </Styled.Wrapper>
  );
};
