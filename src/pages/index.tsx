import { Base } from 'templates/Base';
import { useContext, useEffect, useState } from 'react';
import mock from 'components/WeatherCard/mock';
import { BlogThemeContext } from 'contexts/BlogThemeContext';

export default function Index() {
  const [weatherData, setWeatherData] = useState(mock);
  const { setTheme } = useContext(BlogThemeContext);

  // Função para buscar dados com base na cidade
  const fetchWeatherData = async (city: string): Promise<void> => {
    try {
      // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API real
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a40b3bfcb5551a937ca7d0a49d582272`,
      );
      const data = await response.json();

      // Se a resposta da API contiver dados válidos, atualize o estado
      if (data) {
        const currentDate = new Date();
        const sunrise = new Date((data.sys.sunrise + data.sys.timezone) * 1000);
        const sunset = new Date((data.sys.sunset + data.sys.timezone) * 1000);
        setWeatherData({
          weatherInfo: {
            weatherType: data.weather[0].main,
            temperature: data.main.temp,
            description: data.weather[0].description,
            isNight: currentDate > sunrise && currentDate < sunset,
          },
          humidity: data.main.humidity,
          wind: data.wind.speed,
          onSearch: (query: string) => {
            // Retorna a promessa resultante da chamada assíncrona
            return fetchWeatherData(query);
          },
        });
      }
    } catch (error) {
      console.error(`Erro ao buscar dados de ${city}:`, error);
      // Rejeita a promessa em caso de erro
      throw error;
    }
  };

  useEffect(() => {
    // Chame a função para buscar dados ao montar o componente
    fetchWeatherData('dublin');
    setTheme(weatherData.weatherInfo.isNight ? 'inverted' : 'default');
  }, []);

  const handleSearch = async (query: string): Promise<void> => {
    try {
      // Chame a função para buscar dados quando a consulta de busca mudar
      await fetchWeatherData(query);
    } catch (error) {
      // Lida com o erro, se necessário
      console.error(`Erro durante a busca por ${query}:`, error);
    }
  };

  return <Base weatherCard={weatherData} onSearch={handleSearch} />;
}
