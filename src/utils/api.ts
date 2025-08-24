import { WeatherResponse } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

if (!API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_OPENWEATHER_API_KEY in .env.local");
}

export const getWeather = async (
  city: string
): Promise<WeatherResponse | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`
    );

    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as WeatherResponse;

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(`Error request OpenWeather: ${error}`);
  }
};
