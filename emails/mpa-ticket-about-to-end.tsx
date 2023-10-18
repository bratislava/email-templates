import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Text,
  Row,
} from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import StatusImg from "../components/StatusImg";
import { cdnImageAddress } from "../utils/constants";
import { StatusImgVariants } from "../utils/enums";
import { mpaTexts as texts } from "../utils/translations";

export const MpaEmailValidationEmail = () => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Row style={{ ...border, paddingTop: "0" }}>
            <Column>
              <Img
                height={40}
                src={`${cdnImageAddress}/bratislava-castle-medium.png`}
                alt="Mesto Bratislava"
                style={logoImg}
              />
            </Column>
          </Row>
          <Row style={containerMain}>
            <Column>
              <StatusImg variant={StatusImgVariants.hourglass} />
              <Heading as="h1" style={{ ...containerMain, ...heading }}>
                {texts.ticketAboutToEnd.title}
              </Heading>
              <Row>
                <Column>
                  <Text style={headerContentSubtitle}>
                    {texts.ticketAboutToEnd.description}
                  </Text>
                  <Text style={border} />
                  <Markdown
                    markdownCustomStyles={{
                      p: { marginBottom: "0px" },
                    }}
                  >
                    {texts.footer}
                  </Markdown>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default MpaEmailValidationEmail;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "Inter, sans-serif",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
};

const logoImg = {
  margin: "20px auto",
};

const fullWidthButton = {
  width: " 100vw",
  minWidth: "150px",
  color: "#FFFFFF",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: "#D83728",
  textAlign: "center",
  verticalAlign: "middle",
  display: "table-cell",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  paddingTop: "12px",
  paddingBottom: "12px",
} as React.CSSProperties;

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
  paddingLeft: "24px",
  paddingRight: "24px",
};

const headerContentSubtitle = {
  fontSize: "17px",
};

const container = {
  maxWidth: "584px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "24px",
  margin: 0,
};
