import { Column, Text, Row } from "@react-email/components";
import * as React from "react";
import { StatusImgVariants } from "../utils/enums";
import { mpaTexts as texts } from "../utils/translations";
import Footer from "../components/Footer";
import Title from "../components/Title";
import BasicEmail from "../components/BasicEmail";
import LinkButton from "../components/LinkButton";

export const MpaEmailValidationEmail = () => {
  return (
    <BasicEmail>
      <Title
        statusImg={StatusImgVariants.hourglass}
        title={texts.validateEmail.title}
      />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>
            {texts.validateEmail.description}
          </Text>
          <LinkButton
            href="{{link}}"
            text={texts.validateEmail.validateEmail}
            isBlock
          />
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
