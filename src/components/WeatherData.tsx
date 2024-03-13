import { Box, Stack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import WeatherImage from "./WeatherImage";

interface Props {
  city: string
}

export default function WeatherData({ city }: Props) {
  const data = useData(city)


  return (
    <Box mt={10}>
      {data &&
        <Stack>
          <Text as={"b"} fontSize={"4xl"} mb={2}>{data.name}</Text>
          <WeatherImage icon={data.weather && data.weather[0].icon}/>
          <Text fontSize={"2xl"}>{data.main && Math.ceil(data.main.temp) + " °C"}</Text>
          <Text>{data.weather && data.weather[0].description}</Text>
        </Stack>
      }
    </Box>
  )
}