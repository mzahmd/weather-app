import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react"
import useData from "./hooks/useData"

function App() {

  const data = useData()
  console.log(data);

  return (
    <Box p={5}>
      <Box>
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input width='50%' placeholder="Enter a City..." />
        </InputGroup>
      </Box>
      <Box mt={10} pb={10} border="2px" borderRadius={"10"} borderColor='gray.200'>
        <Container>
          <HStack spacing={"20rem"}>
            <Box>Bild</Box>
            <Box mt={10}>
              <Stack>
                <Text fontSize={"xl"}>Today</Text>
                <Text as={"b"} fontSize={"4xl"} mb={2}>{data && data.name}</Text>
                <Text fontSize={"2xl"}>{data && Math.ceil(data.main.temp) + " °C"}</Text>
                <Text>{data && data.weather[0].description}</Text>
              </Stack>
            </Box>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default App
