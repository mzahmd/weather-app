import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"

export default function ColorSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton variant={"ghost"} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} aria-label={"dark mode toggle icon"} onClick={toggleColorMode} />
  )
}