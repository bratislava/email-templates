import { Text } from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import { mpaTexts as texts } from "../utils/translations";

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "24px",
  margin: 0,
};

const Footer = () => (
  <>
    <Text style={border} />
    <Markdown
      markdownCustomStyles={{
        p: { marginBottom: "0px" },
      }}
    >
      {texts.footer}
    </Markdown>
  </>
);

export default Footer;
