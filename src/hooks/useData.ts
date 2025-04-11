import { useEffect, useState } from "react";
import { API_URL } from "../data/constant";

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

interface WeatherResponse {
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
    fetch(`${API_URL}?q=${city}&units=metric&appid=${import.meta.env.VITE_KEY}`)
      .then((r) => r.json())
      .then((response) => {
        if (response.cod === 200) {
          setData(response);
          setError(null);
        } else {
          throw new Error("City not Found");
        }
      })
      .catch((e) => {
        setError(e);
      });
  }, [city]);

  return { data, error };
}
