import { Column, Heading, Text, Row } from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import Title from "./Title";
import Footer from "./Footer";
import BasicEmail from "./BasicEmail";
import LinkButton from "./LinkButton";
import { StatusImgVariants, Variant, FooterVariant } from "../utils/enums";
import { kontoTexts as texts } from "../locales/sk/translations";
import Feedback from "./Feedback";

interface FormStatusEmailProps {
  variant: Variant;
}

export const variants = {
  errorVirus: {
    titleText: texts.mainTexts.errorVirus.title,
    statusImg: StatusImgVariants.error,
    text: texts.mainTexts.errorVirus.content,
    footerVariant: FooterVariant.using,
  },
  errorTryAgain: {
    titleText: texts.mainTexts.errorTryAgain.title,
    statusImg: StatusImgVariants.error,
    text: texts.mainTexts.errorTryAgain.content,
    footerVariant: FooterVariant.using,
  },
  errorNotSpecified: {
    titleText: texts.mainTexts.errorNotSpecified.title,
    statusImg: StatusImgVariants.error,
    text: texts.mainTexts.errorNotSpecified.content,
    footerVariant: FooterVariant.using,
  },
  inProgress: {
    titleText: texts.mainTexts.inProgress.title,
    statusImg: StatusImgVariants.hourglass,
    text: texts.mainTexts.inProgress.content,
    footerVariant: FooterVariant.using,
  },
  sent: {
    titleText: texts.mainTexts.sent.title,
    statusImg: StatusImgVariants.sent,
    text: texts.mainTexts.sent.content,
    showFeedback: true,
    footerVariant: FooterVariant.using,
  },
  delivered: {
    titleText: texts.mainTexts.delivered.title,
    statusImg: StatusImgVariants.sent,
    text: texts.mainTexts.delivered.content,
    showFeedback: true,
    footerVariant: FooterVariant.using,
  },
  success: {
    titleText: texts.mainTexts.success.title,
    statusImg: StatusImgVariants.success,
    text: texts.mainTexts.success.content,
    showFeedback: true,
    footerVariant: FooterVariant.using,
  },
  denied: {
    titleText: texts.mainTexts.denied.title,
    statusImg: StatusImgVariants.cross,
    text: texts.mainTexts.denied.content,
    showFeedback: true,
    footerVariant: FooterVariant.using,
  },
  paasTestingInvitation: {
    titleText: texts.mainTexts.paasTestingInvitation.title,
    statusImg: StatusImgVariants.castle,
    text: texts.mainTexts.paasTestingInvitation.content,
    footerVariant: FooterVariant.develop,
    showUnsubscribe: true,
  },
  taxesTestingInvitation: {
    titleText: texts.mainTexts.taxesTestingInvitation.title,
    statusImg: StatusImgVariants.castle,
    text: texts.mainTexts.taxesTestingInvitation.content,
    footerVariant: FooterVariant.develop,
    showUnsubscribe: true,
  },
  taxesTestingInvitationSecond: {
    titleText: texts.mainTexts.taxesTestingInvitationSecond.title,
    statusImg: StatusImgVariants.castle,
    text: texts.mainTexts.taxesTestingInvitationSecond.content,
    footerVariant: FooterVariant.develop,
  },
};

const ApplicationStatusEmail = ({
  variant = variants.paasTestingInvitation,
}: FormStatusEmailProps) => {
  return (
    <BasicEmail>
      <Title statusImg={variant.statusImg} title={variant.titleText} />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>{texts.salutation}</Text>
          <Markdown
            markdownCustomStyles={{
              p: { marginBottom: "0px" },
            }}
          >
            {variant.text}
          </Markdown>
          {variant === variants.taxesTestingInvitation && (
            <>
              <Heading as="h2" style={secondaryHeading}>
                {texts.mainTexts.taxesTestingInvitation.secondaryHeading}
              </Heading>
              <Markdown>
                {texts.mainTexts.taxesTestingInvitation.orderedList}
              </Markdown>
            </>
          )}
          {variant === variants.taxesTestingInvitationSecond && (
            <>
              <Heading as="h2" style={secondaryHeading}>
                {texts.mainTexts.taxesTestingInvitationSecond.secondaryHeading}
              </Heading>
              <Markdown>
                {
                  texts.mainTexts.taxesTestingInvitationSecond
                    .unorderedListFirst
                }
              </Markdown>
              <Markdown>
                {texts.mainTexts.taxesTestingInvitationSecond.secondContent}
              </Markdown>
              <Heading as="h2" style={secondaryHeading}>
                {texts.mainTexts.taxesTestingInvitationSecond.ternaryHeading}
              </Heading>
              <Markdown>
                {
                  texts.mainTexts.taxesTestingInvitationSecond
                    .unorderedListSecond
                }
              </Markdown>
            </>
          )}

          {[variants.errorVirus, variants.errorTryAgain].includes(variant) && (
            <>
              <div style={{ marginTop: "36px" }}></div>
              <LinkButton
                href="{{slug}}"
                text={
                  variant === variants.errorVirus
                    ? texts.reuploadAttachments
                    : texts.editFormTitle
                }
              />
            </>
          )}
          {[variants.errorNotSpecified, variants.inProgress].includes(
            variant
          ) && (
            <>
              <div style={{ marginTop: "36px" }}></div>
              <LinkButton
                href={`{{feHost}}/moje-ziadosti?sekcia=odosiela-sa"`}
                text={texts.redirectMyApplications}
              />
            </>
          )}
          {variant === variants.paasTestingInvitation &&
            buttonLink(
              texts.mainTexts.paasTestingInvitation.buttonAddress,
              texts.mainTexts.paasTestingInvitation.buttonTitle
            )}

          {variant === variants.taxesTestingInvitation &&
            buttonLink(
              texts.mainTexts.taxesTestingInvitation.buttonAddress,
              texts.mainTexts.taxesTestingInvitation.buttonTitle
            )}
          {variant === variants.taxesTestingInvitationSecond &&
            buttonLink(
              texts.mainTexts.taxesTestingInvitationSecond.buttonAddress,
              texts.mainTexts.taxesTestingInvitationSecond.buttonTitle
            )}

          {variant === variants.taxesTestingInvitationSecond && (
            <>
              <div style={{ marginTop: "24px" }}></div>
              <Heading as="h2" style={secondaryHeading}>
                {texts.mainTexts.taxesTestingInvitationSecond.thirdContentTitle}
              </Heading>
              <Markdown>
                {texts.mainTexts.taxesTestingInvitationSecond.thirdContent}
              </Markdown>
            </>
          )}
          {variant.showFeedback && (
            <Feedback
              href="{{feedbackLink}}"
              title={texts.feedbackTitle}
              buttonText={texts.feedbackButton}
            />
          )}
          <Footer variant={variant.footerVariant} />
          {variant.showUnsubscribe && (
            <Markdown
              markdownCustomStyles={{
                p: {
                  marginBottom: "0px",
                  marginTop: "24px",
                  textAlign: "center",
                },
              }}
            >
              {texts.unsubscribe}
            </Markdown>
          )}
        </Column>
      </Row>
    </BasicEmail>
  );
};

export default ApplicationStatusEmail;

const secondaryHeading = {
  margin: 0,
  textAlign: "center",
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "32px",
} as React.CSSProperties;

const headerContentSubtitle = {
  fontSize: "17px",
};

function buttonLink(
  buttonAddress: string,
  buttonTitle: string
): React.ReactNode {
  return (
    <>
      <div style={{ marginTop: "24px" }}></div>
      <LinkButton href={buttonAddress} text={buttonTitle} />
    </>
  );
}
