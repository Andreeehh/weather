import { SunRays } from 'components/SunRays';
import * as Styled from './styles';
import { WeatherCard, WeatherCardProps } from 'components/WeatherCard';
import { Clouds } from 'components/Clouds';
import { FullCloud } from 'components/FullCloud';
import { RainComponent } from 'components/Rain';
import { SnowFall } from 'components/SnowFall';
import { StormRays } from 'components/StormRays';
import { LightBeams } from 'components/LightBeam';

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
  const sizes1 = [100, 200, 250, 300];
  const cloudDurations1 = ['30s', '35s', '40s', '45s'];

  const sizes2 = [500, 450, 300, 250];
  const cloudDurations2 = ['55s', '50s', '45s', '40s'];

  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Clouds cloudSizes={sizes1} cloudDurations={cloudDurations1} />
      <Clouds cloudSizes={sizes2} cloudDurations={cloudDurations2} />
      <LightBeams count={50} length={150} />
      <FullCloud />
      <SnowFall numDrops={200} />
      <StormRays
        count={12}
        length={500}
        thickness={30}
        animationEnabled={true}
      />
      <RainComponent numDrops={200} />
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
