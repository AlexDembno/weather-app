"use client";

import { useState, useEffect } from "react";

import { WeatherResponse } from "@/types/weather";
import { SearchInput } from "@/components/SearchInput";
import { WeatherCard } from "@/components/WeatherCard";

import {
  getWeatherVideoById,
  getWeatherBackgroundById,
} from "@/utils/getWeatherVideo";
import { WeatherVideo } from "@/components/WeatherVideo";

const DEFAULT_CITY = "Stuttgart";

export default function Home() {
  const [searchCity, setSearchCity] = useState(() => {
    try {
      const last = localStorage.getItem("last-city")?.trim();
      if (last && last.length >= 3) return last;
      return DEFAULT_CITY;
    } catch {
      return DEFAULT_CITY;
    }
  });
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [successTrigger, setSuccessTrigger] = useState(false);

  useEffect(() => {
    if (searchCity.trim().length < 3) {
      setError("");
      setWeather(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const getSomeWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/weather?city=${encodeURIComponent(searchCity)}`,
          { cache: "no-store", signal: controller.signal }
        );

        if (res.status === 404) {
          setWeather(null);
          setError(`City "${searchCity}" not found`);
          return;
        }
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }

        const data = (await res.json()) as WeatherResponse;

        localStorage.setItem("last-city", searchCity);
        setWeather(data);
        setError("");
        setSuccessTrigger((prev) => !prev);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          setWeather(null);
          setError(err?.message ?? "Request failed");
        }
      } finally {
        setLoading(false);
      }
    };

    getSomeWeather();

    return () => controller.abort();
  }, [searchCity]);

  const backgroundClass = weather
    ? getWeatherBackgroundById(weather.weather[0].id)
    : "bg-gradient-to-br from-sky-50 via-white to-sky-200 dark:from-gray-300 dark:via-gray-100 dark:to-gray-400";

  return (
    <main className="min-h-screen flex flex-col">
      <div
        className={`
        flex-1 ${backgroundClass}
        motion-safe:transition-colors motion-safe:duration-500
      `}
      >
        <div className="min-h-screen flex flex-col">
          <div
            className="
    w-full
    px-6 py-6
    border-b border-white/20
    bg-white/10 dark:bg-gray-900/30
    backdrop-blur-lg supports-[backdrop-filter]:backdrop-blur-lg
    text-white
    shadow-[0_4px_16px_rgba(0,0,0,0.5)]
    flex flex-col items-center
    transition-colors duration-500
  "
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center text-white drop-shadow">
              Weather forecast
            </h1>

            <div className="w-full max-w-md">
              <SearchInput
                setSearchCity={setSearchCity}
                successTrigger={successTrigger}
                loading={loading}
                className="
        w-full px-4 py-3 pr-10 rounded-lg
        bg-white/40 dark:bg-gray-800/50
        backdrop-blur-md
        text-gray-900 dark:text-white
        placeholder-gray-600 dark:placeholder-gray-400
        border border-white/30
        focus:outline-none focus:ring-2 focus:ring-sky-400
        shadow-md
        transition
      "
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6 md:p-8">
            <div
              className="
            w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl
            mx-auto
            bg-white/80 dark:bg-black/30 backdrop-blur
            rounded-2xl overflow-hidden
            p-4 sm:p-6 lg:p-8 shadow-xl text-center
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

              {error && searchCity.trim().length >= 3 && (
                <p className="mt-4 text-center text-red-600">{error}</p>
              )}

              {weather && (
                <div className="motion-safe:transition-opacity motion-safe:duration-500 motion-safe:animate-fadeIn">
                  <WeatherCard weather={weather} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
