import {
  Body,
  Container,
  Head,
  Html,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

import Header from "../components/Header";

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "Inter, sans-serif",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
};

const containerMain = {
  paddingBottom: "32px",
  paddingLeft: "24px",
  paddingRight: "24px",
};

const container = {
  maxWidth: "584px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const BasicEmail = ({ children }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Header />
        <Row style={containerMain}>
          <Column>{children}</Column>
        </Row>
      </Container>
    </Body>
  </Html>
);

export default BasicEmail;
