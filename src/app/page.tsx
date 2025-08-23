"use client";

import { useState, useEffect } from "react";

import { getWeather } from "@/utils/api";
import { WeatherResponse } from "@/types/weather";
import { SearchInput } from "@/components/SearchInput";
import { WeatherCard } from "@/components/WeatherCard";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  console.log("searchCity", searchCity);

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

        console.log("data", data);
        if (data) {
          setWeather(data);
          setError("");
        } else {
          setWeather(null);
          setError(`Город "${searchCity}" не найден 😕`);
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchInput setSearchCity={setSearchCity} />
      {loading && <p className="text-blue-500">loading...</p>}
      {error && searchCity.trim().length >= 3 && (
        <p className="text-red-500">{error}</p>
      )}

      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}
