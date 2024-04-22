import { useState } from "react"

import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"

import ColorSwitch from "./components/ColorSwitch"
import WeatherData from "./components/WeatherData"

function App() {
  const [isSearch, setIsSearch] = useState("")
  const [searchCity, setSearchCity] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchCity(isSearch)
    setIsSearch("")
  }

  return (
    <Box p={5}>
      <HStack justify={"center"}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            <InputLeftAddon>
              <SearchIcon />
            </InputLeftAddon>
            <Input variant={"filled"} onChange={(e) => setIsSearch(e.target.value)} value={isSearch} placeholder={"Enter a City..."} />
          </InputGroup>
        </form>
        <ColorSwitch />
      </HStack>
      <Container mt={10} p={10} border={"2px"} borderRadius={"10"} borderColor={"gray.400"} centerContent>
        {searchCity && <WeatherData city={searchCity} />}
      </Container>
    </Box>
  )
}

export default App
