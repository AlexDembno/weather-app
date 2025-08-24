/* eslint-disable @next/next/no-img-element */
import { WeatherResponse } from "@/types/weather";
import { WiStrongWind, WiHumidity } from "react-icons/wi";

interface WeatherCardProps {
  weather: WeatherResponse;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const {
    name,
    main: { temp, feels_like, humidity },
    weather: weatherDetails,
    wind,
  } = weather;

  const description = weatherDetails[0].description;
  const icon = weatherDetails[0].icon;

  return (
    <div
      className="w-full max-w-md mt-10 p-6 rounded-xl shadow-xl 
                 backdrop-blur-md bg-white/10 dark:bg-black/30 
                 transition-transform duration-300 hover:scale-[1.02] 
                 border border-white/20 dark:border-white/10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
      </div>

      <p className="text-lg capitalize text-gray-800 dark:text-gray-300">
        {description}
      </p>

      <div className="flex items-baseline space-x-2 mt-4">
        <span className="text-6xl font-semibold text-gray-900 dark:text-white">
          {Math.round(temp)}°C
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          feels like {Math.round(feels_like)}°C
        </span>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <WiHumidity className="text-xl" />
          <span>{humidity}% humidity</span>
        </div>
        <div className="flex items-center gap-2">
          <WiStrongWind className="text-xl" />
          <span>{wind.speed} m/s wind</span>
        </div>
      </div>
    </div>
  );
};
