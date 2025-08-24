# Weather Forecast App

Weather Forecast App is a single-page application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It retrieves weather data from [OpenWeatherMap API](https://openweathermap.org/api), displays it in a user-friendly interface, and dynamically changes the background video depending on the weather conditions.

## Features

- City search with debounce (minimum 3 characters).
- Saves the last searched city in `localStorage`.
- Dynamic background video depending on the weather condition.
- Gradient background and responsive design with Tailwind CSS.
- Light/Dark mode support.
- Weather card with details such as temperature, wind, etc.
- Loading animation and smooth transitions.
- Search input is automatically cleared after a successful request.

## Technologies

- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Hooks (`useState`, `useEffect`)
- Custom hooks: `useDebouncedValue`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your API key:

   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```bash
app/
  page.tsx              # Main page
components/
  SearchInput.tsx       # Search input component
  WeatherCard.tsx       # Weather card component
  WeatherVideo.tsx      # Background video component
hooks/
  useDebounce.ts        # Debounce hook
types/
  weather.ts            # TypeScript types for API response
utils/
  api.ts                # API integration with OpenWeatherMap
  getWeatherVideo.ts    # Selects video and background class by weather ID
public/videos/          # Background videos
```

## Future Improvements

- Add animated weather icons (Lottie or react-icons).
- Support for unit selection (°C / °F).
- Search history for cities.
- Auto-detect user's location (Geolocation API).
- Optimize videos for mobile devices.

## License

MIT License
