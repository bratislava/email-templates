import * as React from 'react'
import { Column, Row, Text } from '@react-email/components'
import { Markdown } from '@react-email/markdown'

import BasicEmail from '../components/BasicEmail'
import { kontoTexts as texts } from '../locales/sk/translations'
import { FooterVariant, StatusImgVariants } from '../utils/enums'
import Footer from '../components/Footer'
import { HeaderLogos } from '../utils/constants'
import Title from '../components/Title'

const KontoPaasKontaktnyFormularSuccess = () => {
  return (
    <BasicEmail
      headerLogos={[HeaderLogos.city, HeaderLogos.paas]}
    >
      <Title
        statusImg={StatusImgVariants.success}
        title={texts.mainTexts.kontoPaasKontaktnyFormularSuccess.title}
      />
      <Row>
        <Column>
          <Text style={headerContentSubtitle}>{texts.salutation}</Text>
          <Markdown
            markdownCustomStyles={{
              p: { marginBottom: "0px" },
            }}
          >
            {texts.mainTexts.kontoPaasKontaktnyFormularSuccess.content}
          </Markdown>
          <Footer variant={FooterVariant.paas} />
          <Text style={border} />
          <Markdown
            markdownCustomStyles={{
              p: {
                marginBottom: "0px",
                marginTop: "32px",
                fontSize: "14px",
                lineHeight: "20px",
              },
            }}
          >
            {texts.mainTexts.kontoPaasKontaktnyFormularSuccess.license}
          </Markdown>
        </Column>
      </Row>
    </BasicEmail>
  );
};

export default KontoPaasKontaktnyFormularSuccess;

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "32px",
  margin: 0,
};

const headerContentSubtitle = {
  fontSize: "17px",
};
