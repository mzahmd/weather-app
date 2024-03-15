import { useEffect, useState } from "react";

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainData {
  temp: number;
  humidity: number;
}

export interface WeatherResponse {
  name: string;
  weather: WeatherData[];
  main: MainData;
  wind: { speed: number };
}

interface ErrorResponse {
  message: string;
}

export default function useData(city: string) {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_KEY
        }`
      )
        .then((r) => r.json())
        .catch(() => {
          alert("Eingabe Ungültig");
        });

      if (response.cod === 200) {
        setData(response);
        setError(null);
      } else {
        setError(response);
        setData(null);
      }
    }
    fetchData();
  }, [city]);

  return { data, error };
}
