import { Heading, Text } from "@natanaelvich-ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import Image from "next/image";
import previewImage from "../../assets/app-preview.png";
import { globalStyles } from "../../styles/global";

globalStyles()

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  );
}