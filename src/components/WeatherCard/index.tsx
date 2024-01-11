import { WeatherInfo, WeatherInfoProps } from 'components/WeatherInfo';
import * as Styled from './styles';
import { LocationSearch } from 'components/LocationSearch';
import { Humidity } from 'components/Humidity';
import { Wind } from 'components/Wind';

export type WeatherCardProps = {
  weatherInfo: WeatherInfoProps;
  humidity: number;
  wind: number;
  onSearch: (query: string) => Promise<void>;
};

export const WeatherCard = ({
  weatherInfo,
  humidity,
  wind,
  onSearch,
}: WeatherCardProps) => {
  return (
    <Styled.Wrapper>
      <LocationSearch onSearch={onSearch}></LocationSearch>
      <WeatherInfo {...weatherInfo}></WeatherInfo>
      <div className="weather-details">
        <Humidity value={humidity}></Humidity>
        <Wind value={wind}></Wind>
      </div>
    </Styled.Wrapper>
  );
};
