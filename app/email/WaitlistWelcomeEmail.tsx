import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { Link } from "@react-email/link";
import * as React from "react";

type WaitlistWelcomeEmailProps = {
  username: string;
};

export const WaitlistWelcomeEmail = ({
  username,
}: WaitlistWelcomeEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your username {username} is now reserved on Saw that Band</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text className="text-center text-6xl">🤘</Text>
            <Hr style={hr} />
            <Text style={paragraph} className="text-center">
              Thanks for joining our waitlist
            </Text>
            <Section className="bg-zinc-800 rounded-lg w-full p-6 text-zinc-500">
              <Text className="text-5xl font-bold text-white text-center">
                {username}
              </Text>
            </Section>
            <Text style={paragraph} className="text-center">
              Your username {username} is now reserved on Saw that Band
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              We will notify you via email as soon as the app is launched to
              complete the registration.
            </Text>
            <Text style={paragraph}>
              Share{" "}
              <Link
                style={anchor}
                href="http://www.sawthat.band/?utm_source=waitlistEmail"
              >
                Saw that Band
              </Link>{" "}
              with your friends. The more people who show interest, the more
              time I can dedicate to developing the project.
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Saw that band, a side project by{" "}
              <Link
                style={anchor}
                href="https://www.linkedin.com/in/victor-ferreira-santos/"
              >
                Victor Santos
              </Link>
              , independently made from Berlin.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WaitlistWelcomeEmail;

const main = {
  backgroundColor: "#09090b",
  fontFamily:
    '"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#18181b",
  margin: "0 auto",
  padding: "24px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#27272a",
  margin: "24px 0",
};

const paragraph = {
  color: "#e4e4e7",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#34d399",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#71717a",
  fontSize: "12px",
  lineHeight: "16px",
};
