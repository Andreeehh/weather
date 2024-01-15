import { WeatherCardProps } from '.';
import mockInfo from '../WeatherInfo/mock';

export default {
  weatherInfo: mockInfo,
  humidity: 0,
  wind: 0,
  onSearch: (query: string) => {
    console.log(`Mock search triggered with query: ${query}`);
  },
} as WeatherCardProps;
