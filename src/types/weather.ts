export type WeatherResponse = {
  name: string;
  sys: { country: string };
  main: {
    feels_like: number;
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};
