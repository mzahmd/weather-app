import { useEffect, useState } from "react";

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainData {
  temp: number;
  pressure: number;
  humidity: number;
}

interface FetchResponse {
  name: string;
  weather: WeatherData[];
  main: MainData;
  wind: { speed: number };
}

export default function useData(): FetchResponse | null {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${
          import.meta.env.VITE_KEY
        }`
      );
      const d = await response.json();
      setData(d);
    }
    fetchData();
  }, []);

  return data;
}
