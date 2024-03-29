import { Heading } from "@react-email/components";
import * as React from "react";
import StatusImg from "../components/StatusImg";

const heading = {
  paddingTop: "24px",
  paddingBottom: "24px",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "36px",
} as React.CSSProperties;

const containerMain = {
  paddingBottom: "32px",
};

const Title = ({ statusImg, title }) => (
  <>
    <StatusImg variant={statusImg} />
    <Heading as="h1" style={{ ...containerMain, ...heading }}>
      {title}
    </Heading>
  </>
);

export default Title;
