import { Box, Stack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Props {
  city: string
}

export default function WeatherData({ city }: Props) {
  const data = useData(city)


  return (
    <Box mt={10}>
      {data &&
        <Stack>
          <Text fontSize={"xl"}>Today</Text>
          <Text as={"b"} fontSize={"4xl"} mb={2}>{data.name}</Text>
          <Text fontSize={"2xl"}>{data.main && Math.ceil(data.main.temp) + " °C"}</Text>
          <Text>{data.weather && data.weather[0].description}</Text>
        </Stack>
      }
    </Box>
  )
}