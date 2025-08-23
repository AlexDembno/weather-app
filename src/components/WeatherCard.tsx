import { WeatherResponse } from "@/types/weather";

type Props = {
  weather: WeatherResponse;
};

export const WeatherCard = ({ weather }: Props) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>{Math.round(weather.main.temp)}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};
