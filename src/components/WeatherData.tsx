import { Container, HStack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import WeatherImage from "./WeatherImage";

interface Props {
  city: string;
}

export default function WeatherData({ city }: Props) {
  const { data, error } = useData(city);

  if (error) {
    return <Text fontSize={"xl"}>{error.message}</Text>;
  }

  return (
    <Container centerContent mt={10}>
      {data && (
        <>
          <HStack>
            <Text fontSize={"2xl"}>{Math.ceil(data.main.temp) + " °C"}</Text>
            <WeatherImage icon={data.weather[0].icon} />
          </HStack>
          <Text fontSize={"2xl"}>{data.weather[0].description}</Text>
          <Text as={"b"} fontSize={"4xl"} mb={2}>
            {data.name}
          </Text>
          <Text>{`wind speed: ${Math.ceil(data.wind.speed)} km/h`}</Text>
          <Text>{`humidity: ${data.main.humidity}`}</Text>
        </>
      )}
    </Container>
  );
}
