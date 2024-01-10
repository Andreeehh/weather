import { SunRays } from 'components/SunRays';
import * as Styled from './styles';
import { WeatherCard, WeatherCardProps } from 'components/WeatherCard';
import { Clouds } from 'components/Clouds';
import { FullCloud } from 'components/FullCloud';

export type BaseProps = {
  weatherCard: WeatherCardProps;
};

export const Base = ({ weatherCard }: BaseProps) => {
  let backgroundColor = '#87CEEB';
  switch (weatherCard.weatherInfo.weatherType.toLowerCase()) {
    case 'cloud':
      backgroundColor = '#87CCCC';
      break;
    default:
      backgroundColor = '#87CEEB';
      break;
  }
  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Clouds />
      {/* <SunRays /> */}
      <FullCloud />
      <Styled.Content>
        <WeatherCard
          weatherInfo={weatherCard.weatherInfo}
          humidity={weatherCard.humidity}
          wind={weatherCard.wind}
        ></WeatherCard>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
