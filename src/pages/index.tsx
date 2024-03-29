import { Base } from 'templates/Base';
import { useContext, useEffect, useState } from 'react';
import mock from 'components/WeatherCard/mock';
import { BlogThemeContext } from 'contexts/BlogThemeContext';
import Head from 'next/head';

export default function Index() {
  const [weatherData, setWeatherData] = useState(mock);
  const { setTheme } = useContext(BlogThemeContext);
  const [cityTitle, setCityTitle] = useState('');

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
        setCityTitle(city);
        const currentTime = new Date().getTime();
        const currentDate =
          data.timezone == -28800
            ? new Date()
            : new Date(currentTime + data.timezone * 1000);
        const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
        const sunset = new Date((data.sys.sunset + data.timezone) * 1000);
        const isNight =
          currentDate.getTime() < sunrise.getTime() ||
          currentDate.getTime() > sunset.getTime();
        setWeatherData({
          weatherInfo: {
            weatherType: data.weather[0].main,
            temperature: data.main.temp,
            description: data.weather[0].description,
            isNight: isNight,
          },
          humidity: data.main.humidity,
          wind: data.wind.speed,
          invalid: false,
          onSearch: (query: string) => {
            // Retorna a promessa resultante da chamada assíncrona
            return fetchWeatherData(query);
          },
        });
        setTheme(isNight ? 'inverted' : 'default');
      }
    } catch (error) {
      mock.invalid = true;
      setWeatherData(mock);
      console.log(weatherData);
    }
  };
  const handleSearch = async (query: string): Promise<void> => {
    try {
      // Chame a função para buscar dados quando a consulta de busca mudar
      await fetchWeatherData(query);
    } catch (error) {
      // Lida com o erro, se necessário
      console.error(`Erro durante a busca por ${query}:`, error);
    }
  };

  return (
    <>
      <Head>
        <title>Weather - {cityTitle}</title>
        <meta name="description" content={`Weather - ${cityTitle}`} />
      </Head>
      <Base weatherCard={weatherData} onSearch={handleSearch} />
    </>
  );
}
