import * as Styled from './styles';
import { WeatherCard, WeatherCardProps } from 'components/WeatherCard';

export type BaseProps = {
  weatherCard: WeatherCardProps;
};

export const Base = ({ weatherCard }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <div className="sun-rays first-ray"></div>
        <div className="sun-rays second-ray"></div>
        <div className="sun-rays third-ray"></div>
        <div className="sun-rays fourth-ray"></div>
        <div className="sun-rays fifth-ray"></div>
        <div className="sun-rays sixth-ray"></div>
        <div className="sun-rays seventh-ray"></div>
        <WeatherCard
          weatherInfo={weatherCard.weatherInfo}
          humidity={weatherCard.humidity}
          wind={weatherCard.wind}
        ></WeatherCard>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
