import { Column, Text, Row } from "@react-email/components";
import * as React from "react";
import { StatusImgVariants } from "../utils/enums";
import { mpaTexts as texts } from "../utils/translations";
import Footer from "../components/Footer";
import Title from "../components/Title";
import BasicEmail from "../components/BasicEmail";
import { HeaderIconVariant } from "../utils/constants";

export const MpaEmailValidationEmail = () => {
  return (
    <BasicEmail headerIconVariant={HeaderIconVariant.paas}>
      <Title statusImg={StatusImgVariants.sent} title={texts.feedback.title} />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>
            {texts.feedback.description}
          </Text>
          <Text style={headerContentSubtitle}>{texts.feedback.userEmail}</Text>
          <Text style={headerContentSubtitle}>
            {texts.feedback.feedbackType}
          </Text>
          <Text style={headerContentSubtitle}>
            {texts.feedback.feedbackContent}
          </Text>
          <Text style={headerContentSubtitle}>{texts.feedback.appVersion}</Text>
          <Text style={headerContentSubtitle}>{texts.feedback.userId}</Text>
        </Column>
      </Row>
      <Footer />
    </BasicEmail>
  );
};

export default MpaEmailValidationEmail;

const headerContentSubtitle = {
  fontSize: "17px",
};
