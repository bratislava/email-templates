import { Column, Text, Row } from "@react-email/components";
import * as React from "react";
import { StatusImgVariants } from "../utils/enums";
import { mpaTexts as texts } from "../locales/sk/translations";
import Footer from "../components/Footer";
import Title from "../components/Title";
import BasicEmail from "../components/BasicEmail";
import { HeaderIconVariant } from "../utils/constants";

export const MpaEmailValidationEmail = () => {
  return (
    <BasicEmail headerIconVariant={HeaderIconVariant.paas}>
      <Title
        statusImg={StatusImgVariants.hourglass}
        title={texts.ticketAboutToEnd.title}
      />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>
            {texts.ticketAboutToEnd.description}
          </Text>
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
