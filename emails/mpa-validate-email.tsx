import { Column, Text, Row, Section } from "@react-email/components";
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
          <Section style={codeBox}>
            <Text style={codeText}>{"{{token}}"}</Text>
          </Section>
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
  textAlign: 'center'
};

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginRight: '30px',
  marginBottom: '30px',
  padding: '20px 10px',
};