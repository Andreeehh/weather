import { Base } from 'templates/Base';
import { useEffect, useState } from 'react';
import mock from 'components/WeatherCard/mock';

export default function Index() {
  const [weatherData, setWeatherData] = useState(mock);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API real
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=dublin&units=metric&appid=${process.env.API_KEY}`,
        );
        const data = await response.json();

        // Se a resposta da API contiver dados válidos, atualize o estado
        if (data) {
          setWeatherData({
            weatherInfo: {
              weatherType: data.weather[0].main,
              temperature: data.main.temp,
              description: data.weather[0].description,
            },
            humidity: data.main.humidity,
            wind: data.wind.speed,
          });
        }
      } catch (error) {
        console.error('Erro ao buscar dados de Dublin:', error);
      }
    };

    // Chame a função para buscar dados ao montar o componente
    fetchData();
  }, []);

  return <Base weatherCard={weatherData} />;
}
