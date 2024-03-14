import { Box, HStack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import WeatherImage from "./WeatherImage";

interface Props {
  city: string
}

export default function WeatherData({ city }: Props) {
  const data = useData(city)

  return (
    <Box>
      {data &&
        <>
          <HStack>
            <Text fontSize={"2xl"}>{data.main && Math.ceil(data.main.temp) + " °C"}</Text>
            <WeatherImage icon={data.weather && data.weather[0].icon} />
          </HStack>
          <Text fontSize={"2xl"}>{data.weather && data.weather[0].description}</Text>
          <Text as={"b"} fontSize={"4xl"} mb={2}>{data.name}</Text>
          <Text>{data.wind && `wind speed: ${Math.ceil(data.wind.speed)} km/h`}</Text>
          <Text>{data.main && `humidity: ${data.main.humidity}`}</Text>
        </>
      }
    </Box>
  )
}