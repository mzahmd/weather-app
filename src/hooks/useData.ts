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

export default function useData(city?: string): FetchResponse | null {
  const [data, setData] = useState(null);

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

      setData(response);
    }
    fetchData();
  }, [city]);

  return data;
}
