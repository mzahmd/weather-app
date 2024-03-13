import { Box, Image } from "@chakra-ui/react";

interface Props {
  icon: string
}

export default function WeatherImage({ icon }: Props) {
  return (
    <Box>
      <Image src={"https://openweathermap.org/img/wn/" + icon + ".png"} alt="" />
    </Box>
  )
}