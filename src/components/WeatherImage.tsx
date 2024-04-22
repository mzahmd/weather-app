import { Box, Image } from "@chakra-ui/react";

interface Props {
  icon: string
}

export default function WeatherImage({ icon }: Props) {
  return (
    <Box mb={0}>
      <Image src={"https://openweathermap.org/img/wn/" + icon + ".png"} alt="weather - image" />
    </Box>
  )
}