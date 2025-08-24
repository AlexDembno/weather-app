"use client";

import { useState, useEffect } from "react";

import { getWeather } from "@/utils/api";
import { WeatherResponse } from "@/types/weather";
import { SearchInput } from "@/components/SearchInput";
import { WeatherCard } from "@/components/WeatherCard";

import {
  getWeatherVideoById,
  getWeatherBackgroundById,
} from "@/utils/getWeatherVideo";
import { WeatherVideo } from "@/components/WeatherVideo";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [successTrigger, setSuccessTrigger] = useState(false);

  useEffect(() => {
    try {
      const last = localStorage.getItem("last-city");
      if (last && last.trim().length >= 3) {
        setSearchCity(last);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (searchCity.trim().length < 3) {
      setError("");
      setWeather(null);
      setLoading(false);
      return;
    }

    const getSomeWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getWeather(searchCity);

        if (data) {
          localStorage.setItem("last-city", searchCity);
          setWeather(data);
          setError("");
          setSuccessTrigger((prev) => !prev);
        } else {
          setWeather(null);
          setError(`City "${searchCity}" not found`);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    getSomeWeather();
  }, [searchCity]);

  const backgroundClass = weather
    ? getWeatherBackgroundById(weather.weather[0].id)
    : "bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900";

  return (
    <main
      className={`
      flex min-h-[100dvh] flex-col items-center justify-center
      pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
      p-4 sm:p-6 lg:p-8
      motion-safe:transition-colors motion-safe:duration-500
      ${backgroundClass}
    `}
    >
      <div
        className="
        w-full 
        max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl
        mr-auto ml-auto
        bg-white/80 dark:bg-black/30 backdrop-blur
        rounded-2xl overflow-hidden
        p-4 sm:p-6 lg:p-8
        shadow-xl motion-safe:transition-all motion-safe:duration-300
        flex flex-col items-center justify-center text-center
      "
      >
        {weather && (
          <div className="relative">
            <WeatherVideo
              key={weather.weather[0].id}
              src={`${getWeatherVideoById(
                weather.weather[0].id
              )}?v=${Date.now()}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/15" />
          </div>
        )}

        <h1
          className="
          text-xl sm:text-2xl lg:text-3xl font-bold text-center
          mb-4 leading-tight break-words
        text-gray-800 dark:text-white
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]
        "
        >
          Weather forecast
        </h1>

        <div
          className="
          text-gray-800 dark:text-white
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]
        "
        >
          <SearchInput
            setSearchCity={setSearchCity}
            successTrigger={successTrigger}
          />
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <div
              className="
        w-5 h-5 rounded-full animate-spin
        border-4 border-t-transparent
        border-gray-800 dark:border-white
        drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]
      "
            ></div>
            <span className="text-gray-800 dark:text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
              Loading...
            </span>
          </div>
        )}

        {error && searchCity.trim().length >= 3 && (
          <p className="mt-4 text-center text-red-600">{error}</p>
        )}

        {weather && (
          <div className="motion-safe:transition-opacity motion-safe:duration-500 motion-safe:animate-fadeIn">
            <WeatherCard weather={weather} />
          </div>
        )}
      </div>
    </main>
  );
}
