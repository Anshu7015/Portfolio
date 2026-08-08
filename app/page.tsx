import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Container className="flex flex-col items-center justify-center text-center">
        <h1 className="text-xl md:text-2xl font-medium tracking-tight text-foreground">
          Portfolio initialization complete.
        </h1>
      </Container>
    </Section>
  );
}
