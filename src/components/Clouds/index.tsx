import { Cloud } from 'components/Cloud';
import * as Styled from './styles';

export type CloudsProps = {
  cloudSizes: number[];
  cloudDurations: string[];
};

export const Clouds = ({ cloudSizes, cloudDurations }: CloudsProps) => {
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
