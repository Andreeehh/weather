import * as Styled from './styles';

export type WeatherInfoProps = {
  weatherType: string;
  temperature: number;
  description: string;
  isNight: boolean;
};

export const WeatherInfo = ({
  weatherType,
  temperature,
  description,
  isNight,
}: WeatherInfoProps) => {
  const image = weatherType.toLowerCase() + (isNight ? '-night' : '-day');
  return (
    <Styled.Wrapper>
      <img
        src={`/assets/images/${image}.png`}
        alt={weatherType}
        className="weather-icon"
      />
      <div className="temperature-info">
        <div className="temperature-info-2">
          <span className="temperature-value">{Math.round(temperature)}</span>
          <span className="temperature-symbol">°C</span>
        </div>
        <span className="temperature-label">{description}</span>
      </div>
    </Styled.Wrapper>
  );
};
