"use client";
import {
  HStack,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function HeaderAbout(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("blackAlpha.200", "whiteAlpha.300");

  return (
    <HStack justify={"space-around"}>
      <Heading
        size="md"
        fontStyle={"italic"}
      >
        About my config
      </Heading>
      <Button
        onClick={toggleColorMode}
        size="md"
        bg={bgColor}
        rightIcon={
          colorMode === "light" ? (
            <IconMoon size={24} />
          ) : (
            <IconSun size={24} />
          )
        }
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
}
