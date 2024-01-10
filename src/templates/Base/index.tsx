import { SunRays } from 'components/SunRays';
import * as Styled from './styles';
import { WeatherCard, WeatherCardProps } from 'components/WeatherCard';

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
      <Styled.Content>
        <SunRays />
        <WeatherCard
          weatherInfo={weatherCard.weatherInfo}
          humidity={weatherCard.humidity}
          wind={weatherCard.wind}
        ></WeatherCard>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
