import * as React from "react";
import { Column, Heading, Text, Row } from "@react-email/components";
import { kontoTexts as texts } from "../utils/translations";
import BasicEmail from "../components/BasicEmail";
import { Markdown } from "@react-email/markdown";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import { VariantFooter } from "../utils/enums";
import Title from "../components/Title";

const heading = {
  paddingTop: "24px",
  paddingBottom: "24px",
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "36px",
} as React.CSSProperties;

const containerMain = {
  paddingBottom: "32px",
};

export const VerifyUserAppeal = () => {
  return (
    <BasicEmail>
      <Title statusImg={"card"} title={texts.verifyUserAppealTitle} />
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }}
      >
        {texts.salutation}
      </Markdown>
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }}
      >
        {texts.verifyUserAppealContent}
      </Markdown>

      <div style={{ marginTop: "32px" }}></div>

      <LinkButton
        href={texts.verifyIdentityButtonAddress}
        isBlock
        text={texts.verifyIdentityButtonTitle}
      />
      <div style={{ marginTop: "32px" }}></div>
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
          },
        }}
      >
        {texts.whyVerifyIdentity}
      </Markdown>
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }}
      >
        {texts.footer2024}
      </Markdown>
      <Footer variant={VariantFooter.using} />
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
    </BasicEmail>
  );
};

export default VerifyUserAppeal;
