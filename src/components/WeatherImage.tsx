import { Box, Image } from "@chakra-ui/react";
import { IMAGE_URL } from "../data/constant";

interface Props {
  icon: string
}

export default function WeatherImage({ icon }: Props) {
  return (
    <Box mb={0}>
      <Image src={`${IMAGE_URL}${icon}.png`} alt="weather - image" />
    </Box>
  )
}