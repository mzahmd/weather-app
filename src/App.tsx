import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useState } from "react"
import ColorSwitch from "./components/ColorSwitch"
import WeatherData from "./components/WeatherData"

function App() {
  const [isSearch, setIsSearch] = useState("")
  const [searchCity, setSearchCity] = useState("")

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter" &&  isSearch.trim() !== "") {
      setSearchCity(isSearch.trim())
      setIsSearch("")
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
            <Input variant={"filled"} onChange={(e) => setIsSearch(e.target.value)} value={isSearch} width='50%' placeholder="Enter a City..." onKeyDown={(e) => handleKeyPress(e)} />
          </InputGroup>
          <ColorSwitch />
        </HStack>
        <Container mt={10} p={10} border="2px" borderRadius={"10"} borderColor='gray.400' centerContent>
          {searchCity && <WeatherData city={searchCity} deleteCityInput={(str) => setSearchCity(str)}/>}
        </Container>
      </Box>
    </>
  )
}

export default App
