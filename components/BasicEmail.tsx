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
import { HeaderIconVariantType } from "../utils/enums";

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

interface BasicEmailProps {
  children: React.ReactNode;
  headerIconVariant?: HeaderIconVariantType;
}

const BasicEmail = ({ children, headerIconVariant }: BasicEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Header iconVariant={headerIconVariant} />
        <Row style={containerMain}>
          <Column>{children}</Column>
        </Row>
      </Container>
    </Body>
  </Html>
);

export default BasicEmail;
