"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { type Data } from "@/types/components";
import AccordionStackItem from "@/components/AccordionStackItem";
import HeaderAbout from "@/components/HeaderAbout";
import MagicLink from "@/components/MagicLink";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function CardAbout({ data }: { data: Data }) {
  const bgColor = useColorModeValue("white", "black");
  const borderColor = useColorModeValue("gray.500", "gray.100");

  return (
    <Card
      maxW="2xl"
      bg={bgColor}
      w="2xl"
      variant="outline"
      borderColor={borderColor}
    >
      <CardBody pb={0}>
        <Stack
          mt="6"
          wrap="wrap"
          spacing="3"
        >
          <HeaderAbout />
          <AccordionStackItem data={data} />
        </Stack>

        <CardFooter
          display="flex"
          justify={"center"}
          alignItems={"end"}
          m={0}
        >
          <MagicLink
            href="https://github.com/EuCaue/dotfiles-website"
            _hover={{ color: "blue_custom.500" }}
            title="Go To project github"
            target="_blank"
          >
            <IconBrandGithubFilled size={32} />
          </MagicLink>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
