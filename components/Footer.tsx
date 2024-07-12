import { Text } from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import { Language, VariantFooter } from "../utils/enums";
import { kontoTexts as texts } from "../utils/translations";

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "32px",
  margin: 0,
};

interface FooterlProps {
  variant?: VariantFooter;
  language?: Language;
}

const Footer = ({
  variant = VariantFooter.using,
  language = Language.sk,
}: FooterlProps) => {
  const localizedTexts = language === Language.sk ? texts : texts.en;

  return (
    <>
      <Text style={border} />
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: "0px", marginTop: "32px" },
        }}
      >
        {variant === VariantFooter.develop
          ? localizedTexts.footerDevelop
          : localizedTexts.footerUsing}
      </Markdown>
    </>
  );
};

export default Footer;
