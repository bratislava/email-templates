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
import StatusImg from "./StatusImg";
import { cdnImageAddress } from "../utils/constants";
import { StatusImgVariants, Variant } from "../utils/enums";
import { texts } from "../utils/translations";

interface FormStatusEmailProps {
  variant: Variant;
}

export const variants = {
  errorVirus: {
    titleText: texts.mainTexts.errorVirus.title,
    statusImg: StatusImgVariants.error,
    text: texts.mainTexts.errorVirus.content,
  },
  errorTryAgain: {
    titleText: texts.mainTexts.errorTryAgain.title,
    statusImg: StatusImgVariants.error,
    text: texts.mainTexts.errorTryAgain.content,
  },
  inProgress: {
    titleText: texts.mainTexts.inProgress.title,
    statusImg: StatusImgVariants.hourglass,
    text: texts.mainTexts.inProgress.content,
  },
  sent: {
    titleText: texts.mainTexts.sent.title,
    statusImg: StatusImgVariants.sent,
    text: texts.mainTexts.sent.content,
  },
  delivered: {
    titleText: texts.mainTexts.delivered.title,
    statusImg: StatusImgVariants.sent,
    text: texts.mainTexts.delivered.content,
  },
  success: {
    titleText: texts.mainTexts.success.title,
    statusImg: StatusImgVariants.success,
    text: texts.mainTexts.success.content,
  },
  denied: {
    titleText: texts.mainTexts.denied.title,
    statusImg: StatusImgVariants.cross,
    text: texts.mainTexts.denied.content,
  },
  paasTestingInvitation: {
    titleText: texts.mainTexts.paasTestingInvitation.title,
    statusImg: StatusImgVariants.castle,
    text: texts.mainTexts.paasTestingInvitation.content,
  },
};

const ApplicationStatusEmail = ({
  variant = variants.paasTestingInvitation,
}: FormStatusEmailProps) => {
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
              <StatusImg variant={variant.statusImg} />
              <Heading as="h1" style={heading}>
                {/* wrapped to Markdown, otherwise it will escape <span></span> elements */}
                <Markdown>{variant.titleText}</Markdown>
              </Heading>
              <Row>
                <Column>
                  <Text style={headerContentSubtitle}>{texts.salutation}</Text>
                  <Markdown
                    markdownCustomStyles={{
                      p: { marginBottom: "0px" },
                    }}
                  >
                    {variant.text}
                  </Markdown>

                  {[variants.errorVirus, variants.errorTryAgain].includes(
                    variant
                  ) && (
                    <>
                      <div style={{ marginTop: "36px" }}></div>
                      <Link href="{{formLink}}" style={fullWidthButton}>
                        {texts.editFormTitle}
                      </Link>
                    </>
                  )}
                  {variant === variants.paasTestingInvitation && (
                    <>
                      <div style={{ marginTop: "24px" }}></div>
                      <Link
                        href={
                          texts.mainTexts.paasTestingInvitation.buttonAddress
                        }
                        style={fullWidthButton}
                      >
                        {texts.mainTexts.paasTestingInvitation.buttonTitle}
                      </Link>
                    </>
                  )}
                  {[
                    variants.sent,
                    variants.delivered,
                    variants.success,
                    variants.denied,
                  ].includes(variant) && (
                    <>
                      <Text style={border} />
                      <Heading as="h2" style={feedback}>
                        {texts.feedbackTitle}
                      </Heading>
                      <Link
                        href="https://text-compare.com/"
                        style={fullWidthButton}
                      >
                        {texts.feedbackButton}
                      </Link>
                    </>
                  )}
                  <Text style={border} />
                  <Markdown
                    markdownCustomStyles={{
                      p: { marginBottom: "0px" },
                    }}
                  >
                    {texts.footer}
                  </Markdown>
                  {variant === variants.paasTestingInvitation && (
                    <Markdown
                      markdownCustomStyles={{
                        p: {
                          marginBottom: "0px",
                          marginTop: "24px",
                          textAlign: "center",
                        },
                      }}
                    >
                      {texts.unsubscribe}
                    </Markdown>
                  )}
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationStatusEmail;

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
  width: "100vw",
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
  textAlign: "center",
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "36px",
} as React.CSSProperties;

const feedback = {
  paddingTop: "32px",
  paddingBottom: "16px",
  margin: 0,
  textAlign: "center",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "28px",
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
  paddingTop: "36px",
  margin: 0,
};
