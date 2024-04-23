import * as React from "react";
import { kontoTexts as texts } from "../utils/translations";
import BasicEmail from "../components/BasicEmail";
import { Markdown } from "@react-email/markdown";
import Footer from "../components/Footer";
import { StatusImgVariants, VariantFooter } from "../utils/enums";
import Title from "../components/Title";
import Feedback from "../components/Feedback";

export const TaxPaymentRequest2024 = () => {
  return (
    <BasicEmail>
      <Title
        statusImg={StatusImgVariants.success}
        title={texts.payment2024.paymentSuccessfulTitle}
      />
      {texts.salutation}
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }}
      >
        {texts.payment2024.thanksForUsingDigitalPayment}
      </Markdown>

      <Feedback />

      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          },
        }}
      >
        {texts.footer2024}
      </Markdown>
      <Footer variant={VariantFooter.using} />
    </BasicEmail>
  );
};

export default TaxPaymentRequest2024;
