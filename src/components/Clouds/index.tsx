import { Cloud } from 'components/Cloud';
import * as Styled from './styles';

export type CloudsProps = {
  title?: string;
};

export const Clouds = ({ title }: CloudsProps) => {
  const cloudSizes = [100, 200, 250, 300, 450, 500];
  const cloudDurations = ['30s', '35s', '40s', '45s', '50s', '55s'];

  return (
    <Styled.CloudsContainer>
      {cloudSizes.map((size, index) => (
        <Cloud
          key={index}
          size={size}
          animationDuration={cloudDurations[index]}
        />
      ))}
    </Styled.CloudsContainer>
  );
};
