import { Base } from 'templates/Base';
import { useEffect, useState } from 'react';
import mock from 'components/WeatherCard/mock';

export default function Index() {
  const [weatherData, setWeatherData] = useState(mock);

  // Função para buscar dados com base na cidade
  const fetchWeatherData = async (city: string) => {
    try {
      // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API real
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a40b3bfcb5551a937ca7d0a49d582272`,
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
          onSearch: (query: string) => {
            console.log(`Mock search triggered with query: ${query}`);
            fetchWeatherData(query); // Agora podemos chamar fetchWeatherData aqui
          },
        });
      }
    } catch (error) {
      console.error(`Erro ao buscar dados de ${city}:`, error);
    }
  };

  useEffect(() => {
    // Chame a função para buscar dados ao montar o componente
    fetchWeatherData('dublin'); // Inicialmente, busca dados de Dublin
  }, []);

  const handleSearch = (query: string) => {
    // Chame a função para buscar dados quando a consulta de busca mudar
    fetchWeatherData(query);
  };

  return <Base weatherCard={weatherData} onSearch={handleSearch} />;
}
