import * as React from "react";
import { Column, Text, Row } from "@react-email/components";
import { Markdown } from "@react-email/markdown";

import BasicEmail from "../components/BasicEmail";
import Title from "../components/Title";
import { kontoTexts as texts } from "../locales/sk/translations";
import { StatusImgVariants, FooterVariant } from "../utils/enums";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";
import { HeaderIconVariant } from "../utils/constants";

const Success = () => {
  return (
    <BasicEmail headerIconVariant={HeaderIconVariant.oloCity}>
      <Title
        statusImg={StatusImgVariants.success}
        title={texts.mainTexts.oloSuccess.title}
      />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>{texts.salutation}</Text>
          <Markdown
            markdownCustomStyles={{
              p: { marginBottom: "0px" },
            }}
          >
            {texts.mainTexts.oloSuccess.content}
          </Markdown>
          <Feedback
            href="https://bravo.staffino.com/bratislava/id=WWFSNa9q"
            title={texts.feedbackTitle}
            buttonText={texts.feedbackButton}
            colorVariant="black"
          />
          <Markdown
            markdownCustomStyles={{
              p: { marginBottom: "0px" },
            }}
          >
            {texts.mainTexts.oloSuccess.license}
          </Markdown>
          <Footer variant={FooterVariant.olo} />
        </Column>
      </Row>
    </BasicEmail>
  );
};

export default Success;

const headerContentSubtitle = {
  fontSize: "17px",
};
