import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useState } from "react"
import ColorSwitch from "./components/ColorSwitch"
import WeatherData from "./components/WeatherData"

function App() {
  const [isSearch, setIsSearch] = useState("")
  const [searchCity, setSearchCity] = useState("")

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {      
      setSearchCity(isSearch)
    }
  }

  return (
    <>
      <Box p={5}>
        <HStack>
          <InputGroup>
            <InputLeftAddon>
              <SearchIcon />
            </InputLeftAddon>
            <Input onChange={(e) => setIsSearch(e.target.value)} value={isSearch} width='50%' placeholder="Enter a City..." onKeyDown={(e) => handleKeyPress(e)} />
          </InputGroup>
          <ColorSwitch />
        </HStack>
        {searchCity &&
          <Container mt={10} p={10} border="2px" borderRadius={"10"} borderColor='gray.400' centerContent>
            <WeatherData city={searchCity} />
          </Container>}
      </Box>
    </>
  )
}

export default App
