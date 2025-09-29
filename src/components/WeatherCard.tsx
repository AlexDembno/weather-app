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
      className="
        w-full mx-auto mt-8
        max-w-lg md:max-w-xl
        p-6 rounded-2xl shadow-xl
        backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md
        bg-white/10 dark:bg-gray-900/40
        ring-1 ring-white/20 dark:ring-white/10
        transition-transform duration-300 hover:scale-[1.01]
      "
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="w-14 h-14 md:w-16 md:h-16 select-none"
        />
      </div>

      <p className="text-base md:text-lg capitalize text-gray-800 dark:text-gray-300">
        {description}
      </p>

      <div className="flex items-baseline gap-2 mt-4">
        <span className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white">
          {Math.round(temp)}°C
        </span>
        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          feels like {Math.round(feels_like)}°C
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <WiHumidity className="text-xl md:text-2xl" />
          <span>{humidity}% humidity</span>
        </div>
        <div className="flex items-center gap-2 justify-end md:justify-start">
          <WiStrongWind className="text-xl md:text-2xl" />
          <span>{wind.speed} m/s wind</span>
        </div>
      </div>
    </div>
  );
};
