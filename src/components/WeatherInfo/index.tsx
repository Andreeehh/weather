import * as Styled from './styles';

export type WeatherInfoProps = {
  weatherType: string;
  temperature: number;
  description: string;
};

export const WeatherInfo = ({
  weatherType,
  temperature,
  description,
}: WeatherInfoProps) => {
  return (
    <Styled.Wrapper>
      <img
        src={`/assets/images/${weatherType.toLowerCase()}.png`}
        alt={weatherType}
        className="weather-icon"
      />
      <div className="temperature-info">
        <div className="temperature-info-2">
          <span className="temperature-value">{temperature}</span>
          <span className="temperature-symbol">°C</span>
        </div>
        <span className="temperature-label">{description}</span>
      </div>
    </Styled.Wrapper>
  );
};
