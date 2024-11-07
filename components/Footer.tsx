import { Text } from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import { Language, FooterVariant } from "../utils/enums";
import { kontoTexts as texts } from "../locales/sk/translations";
import { kontoTexts as enTexts } from "../locales/en/translations";

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "32px",
  margin: 0,
};

interface FooterlProps {
  variant?: FooterVariant;
  language?: Language;
}

const Footer = ({
  variant = FooterVariant.using,
  language = Language.sk,
}: FooterlProps) => {
  const localizedTexts = language === Language.sk ? texts : enTexts;

  return (
    <>
      <Text style={border} />
      {variant && (
        <Markdown
          markdownCustomStyles={{
            p: { marginBottom: "0px", marginTop: "32px" },
          }}
        >
          {variant === FooterVariant.develop
            ? localizedTexts.footerDevelop
            : variant === FooterVariant.using
            ? localizedTexts.footerUsing
            : variant === FooterVariant.olo
            ? localizedTexts.footerOlo
            : ""}
        </Markdown>
      )}
    </>
  );
};

export default Footer;
