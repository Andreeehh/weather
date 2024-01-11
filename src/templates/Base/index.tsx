import * as Styled from './styles';
import { WeatherCard, WeatherCardProps } from 'components/WeatherCard';
import { Clouds } from 'components/Clouds';
import { FullCloud } from 'components/FullCloud';
import { RainComponent } from 'components/Rain';
import { SnowFall } from 'components/SnowFall';
import { StormRays } from 'components/StormRays';
import { LightBeams } from 'components/LightBeam';
import { Moon } from 'components/Moon';

export type BaseProps = {
  weatherCard: WeatherCardProps;
  onSearch: (query: string) => Promise<void>;
};

export const Base = ({ weatherCard, onSearch }: BaseProps) => {
  const weatherType = weatherCard.weatherInfo.weatherType.toLowerCase();
  const sizes1 = [100, 200, 250, 300];
  const cloudDurations1 = ['30s', '35s', '40s', '45s'];

  const sizes2 = [500, 450, 300, 250];
  const cloudDurations2 = ['55s', '50s', '45s', '40s'];
  let additionalComponents = null;
  switch (weatherType) {
    case 'clouds':
      additionalComponents = (
        <>
          {!weatherCard.weatherInfo.isNight && (
            <LightBeams count={50} length={150} />
          )}
          {weatherCard.weatherInfo.isNight && <Moon />}

          <Clouds cloudSizes={sizes1} cloudDurations={cloudDurations1} />
          <Clouds cloudSizes={sizes2} cloudDurations={cloudDurations2} />
        </>
      );
      break;
    case 'clear':
      additionalComponents = (
        <>
          {!weatherCard.weatherInfo.isNight && (
            <LightBeams count={50} length={150} />
          )}
          {weatherCard.weatherInfo.isNight && <Moon />}
        </>
      );
      break;
    case 'rain':
      additionalComponents = (
        <>
          <FullCloud />

          <StormRays
            count={12}
            length={500}
            thickness={30}
            animationEnabled={true}
          />
          <RainComponent numDrops={200} />
        </>
      );
      break;
    case 'snow':
      additionalComponents = (
        <>
          <FullCloud />

          <StormRays
            count={12}
            length={500}
            thickness={30}
            animationEnabled={true}
          />
          <SnowFall numDrops={200} />
        </>
      );
      break;
    default:
      break;
  }

  return (
    <Styled.Wrapper
      backgroundUrl={`/assets/images/${
        weatherCard.weatherInfo.isNight ? 'night' : 'day'
      }.png`}
    >
      {additionalComponents}

      <Styled.Content>
        <WeatherCard
          weatherInfo={weatherCard.weatherInfo}
          humidity={weatherCard.humidity}
          wind={weatherCard.wind}
          onSearch={onSearch}
        ></WeatherCard>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
