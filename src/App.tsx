import { useState } from "react"

import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"

import ColorSwitch from "./components/ColorSwitch"
import WeatherData from "./components/WeatherData"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [cityValue, setCityValue] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCityValue(searchValue)
    setSearchValue("")
  }

  return (
    <Box p={5}>
      <HStack justify={"space-between"}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            <InputLeftAddon>
              <SearchIcon />
            </InputLeftAddon>
            <Input variant={"filled"} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder={"Enter a City..."} />
          </InputGroup>
        </form>
        <ColorSwitch />
      </HStack>
      <Container mt={10} p={10} border={"2px"} borderRadius={"10"} borderColor={"gray.400"} centerContent>
        {cityValue && <WeatherData city={cityValue} />}
      </Container>
    </Box>
  )
}

export default App
