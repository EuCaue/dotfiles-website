import { Center, Container } from "@chakra-ui/react";
import { type Data } from "@/types/components";
import "./globals.css";
import CardAbout from "./CardAbout";

async function getData(): Promise<Data> {
  const res = await fetch(process.env.API_URL!.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <Container>
      <Center minH="container.lg">
        <CardAbout data={data} />
      </Center>
    </Container>
  );
}
