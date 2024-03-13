import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react"

function App() {

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
                <Text>Day</Text>
                <Text as={"b"} fontSize={"4xl"} mb={2}>City</Text>
                <Text>Temperatur</Text>
                <Text>Info</Text>
              </Stack>
            </Box>
          </HStack>
        </Container>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default App
