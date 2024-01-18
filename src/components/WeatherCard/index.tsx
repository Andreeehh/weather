import { WeatherInfo, WeatherInfoProps } from 'components/WeatherInfo';
import * as Styled from './styles';
import { LocationSearch } from 'components/LocationSearch';
import { Humidity } from 'components/Humidity';
import { Wind } from 'components/Wind';
import { useState } from 'react';

export type WeatherCardProps = {
  weatherInfo: WeatherInfoProps;
  humidity: number;
  wind: number;
  onSearch: (query: string) => Promise<void>;
  invalid: boolean;
};

export const WeatherCard = ({
  weatherInfo,
  humidity,
  wind,
  onSearch,
  invalid,
}: WeatherCardProps) => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };
  return (
    <Styled.Wrapper onMouseMove={handleOnMouseMove}>
      <LocationSearch onSearch={onSearch}></LocationSearch>
      <WeatherInfo {...weatherInfo}></WeatherInfo>
      {!!invalid && <Styled.Invalid>Ops... invalid location.</Styled.Invalid>}
      <div className="weather-details">
        <Humidity value={humidity}></Humidity>
        <Wind value={wind}></Wind>
      </div>
    </Styled.Wrapper>
  );
};
