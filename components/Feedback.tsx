import * as React from "react";
import { Heading, Text } from "@react-email/components";
import LinkButton from "./LinkButton";

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "36px",
  margin: 0,
};

const feedback = {
  paddingTop: "32px",
  paddingBottom: "16px",
  margin: 0,
  textAlign: "center",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "28px",
} as React.CSSProperties;

interface FeedbackProps {
  href: string;
  colorVariant?: "red" | "black";
  title: string;
  buttonText: string;
}

const Feedback = ({
  href,
  colorVariant = "red",
  title,
  buttonText,
}: FeedbackProps) => (
  <>
    <Text style={border} />
    <Heading as="h2" style={feedback}>
      {title}
    </Heading>
    <LinkButton href={href} colorVariant={colorVariant} text={buttonText} />
  </>
);

export default Feedback;
