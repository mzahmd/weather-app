import { useState } from "react";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import ColorSwitch from "./components/ColorSwitch";
import WeatherData from "./components/WeatherData";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCityValue(searchValue);
    setSearchValue("");
  }

  return (
    <Box p={5}>
      <HStack justifyContent={"space-between"}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            <InputLeftElement pointerEvents={"none"}>
              <SearchIcon />
            </InputLeftElement>
            <Input
              variant={"filled"}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder={"Enter a City..."}
            />
          </InputGroup>
        </form>
        <ColorSwitch />
      </HStack>
      {cityValue && <WeatherData city={cityValue} />}
    </Box>
  );
}

export default App;
