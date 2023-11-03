import { Column, Text, Row } from "@react-email/components";
import * as React from "react";
import { StatusImgVariants } from "../utils/enums";
import { mpaTexts as texts } from "../utils/translations";
import Footer from "../components/Footer";
import Title from "../components/Title";
import BasicEmail from "../components/BasicEmail";

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
          <div style={codeContainer}>
            <Text style={codeText}>{"{{token}}"}</Text>
          </div>
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

const codeText = {
  fontSize: "32px",
  padding: "24px 16px",
  background: "#e6e6e6",
  borderRadius: "8px",
  width: "fit-content",
  margin: "0px",
};

const codeContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "24px",
};