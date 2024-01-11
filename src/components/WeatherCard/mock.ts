import { WeatherCardProps } from '.';
import mockInfo from '../WeatherInfo/mock';

export default {
  weatherInfo: mockInfo,
  humidity: 80,
  wind: 14,
  onSearch: (query: string) => {
    console.log(`Mock search triggered with query: ${query}`);
  },
} as WeatherCardProps;
