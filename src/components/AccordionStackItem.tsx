"use client";
import { type Data } from "@/types/components";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  List,
  ListItem,
  Button,
  Text,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import MagicLink from "./MagicLink";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import React from "react";

function ButtonCopy({ copyValue }: { copyValue: string }) {
  const { onCopy, setValue, hasCopied } = useClipboard("");
  const [effectCopied, setEffectCopied] = React.useState<boolean>(false);

  if (effectCopied) {
    onCopy();
    setEffectCopied(false);
  }

  return (
    <Button
      variant="ghost"
      sx={{
        ".tabler-icon-check": { color: "blue_custom.500" },
      }}
      onClick={() => {
        setValue(copyValue);
        setEffectCopied(true);
      }}
    >
      {hasCopied ? <IconCheck size={24} /> : <IconCopy size={24} />}
    </Button>
  );
}

export default function AccordionStackItem({ data }: { data: Data }) {
  const outlineColor = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
  const hoverColor = useColorModeValue("white", "black");
  const arrayOfObjects = React.useMemo(() => {
    return Object.entries(data).map(([key, value]) => ({
      key,
      ...value,
    }));
  }, [data]);

  return (
    <Accordion allowToggle>
      {arrayOfObjects.map((o) => (
        <AccordionItem
          key={crypto.randomUUID()}
          //  TODO: make this hover work on hover on title
        >
          <h2>
            <AccordionButton
              _expanded={{ bg: "blue_custom.500", color: "white" }}
              _hover={{
                background: "blue_custom.500",
                color: "white",
              }}
              fontWeight={"medium"}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                css={{
                  textTransform: "uppercase",
                }}
              >
                {o.key}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          {Object.entries(o)
            .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
            .map(([key, value]) => {
              if (key === "key") return;
              return (
                <AccordionPanel
                  pb={4}
                  key={crypto.randomUUID()}
                >
                  <List spacing={3}>
                    <ListItem>
                      <HStack
                        outline={"solid 1px"}
                        outlineColor={outlineColor}
                        borderRadius={"md"}
                        padding={"0 6px"}
                        justify={"space-between"}
                      >
                        <Box
                          display={"flex"}
                          gap={2}
                        >
                          <Box
                            css={{
                              "&:first-letter": {
                                textTransform: "uppercase",
                              },
                            }}
                          >
                            {key}:{" "}
                            {key === "config" || key === "link" ? (
                              <MagicLink
                                color="blue_custom.500"
                                target="_blank"
                                href={Object.values(value).join("")}
                              >
                                {o.key === "wallpaper" ? "Wallpaper" : "Github"}
                              </MagicLink>
                            ) : (
                              <Text
                                display={"inline-block"}
                                css={{
                                  "&:first-letter": {
                                    textTransform: "uppercase",
                                  },
                                }}
                              >
                                {Object.values(value)}
                              </Text>
                            )}
                          </Box>
                        </Box>
                        <ButtonCopy copyValue={Object.values(value).join("")} />
                      </HStack>
                    </ListItem>
                  </List>
                </AccordionPanel>
              );
            })}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
