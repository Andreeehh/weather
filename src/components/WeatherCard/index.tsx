import { WeatherInfo, WeatherInfoProps } from 'components/WeatherInfo';
import * as Styled from './styles';
import { LocationSearch } from 'components/LocationSearch';
import { Humidity } from 'components/Humidity';
import { Wind } from 'components/Wind';

export type WeatherCardProps = {
  weatherInfo: WeatherInfoProps;
  humidity: number;
  wind: number;
};

export const WeatherCard = ({
  weatherInfo,
  humidity,
  wind,
}: WeatherCardProps) => {
  return (
    <Styled.Wrapper>
      <LocationSearch></LocationSearch>
      <WeatherInfo {...weatherInfo}></WeatherInfo>
      <div className="weather-details">
        <Humidity value={humidity}></Humidity>
        <Wind value={wind}></Wind>
      </div>
    </Styled.Wrapper>
  );
};
