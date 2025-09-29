"use server";

import { WeatherResponse } from "@/types/weather";

export const getWeather = async (
  city: string
): Promise<WeatherResponse | null> => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    throw new Error("Missing OPENWEATHER_API_KEY in .env.local");
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`,
      {
        next: { revalidate: 120 },
      }
    );

    if (response.status === 404) return null;
    if (!response.ok)
      throw new Error(`HTTP ${response.status} ${response.statusText}`);

    return (await response.json()) as WeatherResponse;
  } catch (error: unknown) {
    console.error("Weather fetch failed:", error);
    return null;
  }
};
