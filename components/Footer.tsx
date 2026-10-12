import { Text } from '@react-email/components'
import { Markdown } from '@react-email/markdown'
import * as React from 'react'
import { FooterVariant, Language } from '../utils/enums'
import { kontoTexts as texts } from '../locales/sk/translations'
import { kontoTexts as enTexts } from '../locales/en/translations'

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

  const footerTextByVariant: Record<FooterVariant, string> = {
    [FooterVariant.develop]: localizedTexts.footerDevelop,
    [FooterVariant.using]: localizedTexts.footerUsing,
    [FooterVariant.olo]: localizedTexts.footerOlo,
  };

  return (
    <>
      <Text style={border} />
      {variant && (
        <Markdown
          markdownCustomStyles={{
            p: { marginBottom: "0px", marginTop: "32px" },
          }}
        >
          {footerTextByVariant[variant] ?? ""}
        </Markdown>
      )}
    </>
  );
};

export default Footer;
