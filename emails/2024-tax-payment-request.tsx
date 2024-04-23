import * as React from 'react'
import { Column, Heading, Text, Row, Container } from '@react-email/components'
import { kontoTexts as texts } from '../utils/translations'
import BasicEmail from '../components/BasicEmail'
import { Markdown } from '@react-email/markdown'
import LinkButton from '../components/LinkButton'
import Footer from '../components/Footer'
import { VariantFooter } from '../utils/enums'

const heading = {
  paddingBottom: '24px',
  fontWeight: '600',
  fontSize: '28px',
  lineHeight: '36px',
} as React.CSSProperties
const paymentAmount = {
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
} as React.CSSProperties
const container = {
  paddingTop: '24px',
  paddingBottom: '24px',
  paddingLeft: '24px',
  paddingRight: '24px',
  backgroundColor: '#F5F5F5',
  borderRadius: '8px',
} as React.CSSProperties

export const TaxPaymentRequest2024 = () => {
  return (
    <BasicEmail>
      <Heading as="h1" style={{ ...heading }}>
        {texts.payment2024.title}
      </Heading>
      {texts.salutation}
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: '0px' },
        }}
      >
        {texts.payment2024.payFastDigitalyAnywhere}
      </Markdown>
      <Markdown>{texts.payment2024.infoPayment}</Markdown>
      {/* if (hasEdesk) */}
      <Markdown>{texts.payment2024.hasEdeskInfo}</Markdown>
      {/*  */}
      <Container style={container}>
        <Row>
          <Column>
            <Markdown
              markdownCustomStyles={{
                p: { marginBottom: '16px', marginTop: '0px', ...paymentAmount },
              }}
            >
              {texts.payment2024.paymentAmount}
            </Markdown>
          </Column>
          <Column>
            <Markdown
              markdownCustomStyles={{
                p: { marginBottom: '16px', marginTop: '0px', textAlign: 'right', ...paymentAmount },
              }}
            >
              {`{{amount}} €`}
            </Markdown>
          </Column>
        </Row>
        {texts.payment2024.seeDetailsInAccount}
        <div style={{ marginTop: '16px' }}></div>

        <LinkButton
          href={texts.payment2024.seeDetailsInAccountButtonAddress}
          isBlock
          text={texts.payment2024.seeDetailsInAccountButton}
        />
        <div style={{ marginTop: '16px' }}></div>
        <Markdown
          markdownCustomStyles={{
            p: { marginBottom: '0px' },
          }}
        >
          {texts.payment2024.payment15days}
        </Markdown>
      </Container>
      {/* if (isPostDelivery) */}
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: '0px' },
        }}
      >
        {texts.payment2024.postDelivery}
      </Markdown>
      {/*  */}
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: '0px' },
        }}
      >
        {texts.footer2024}
      </Markdown>
      <Footer variant={VariantFooter.using} />
    </BasicEmail>
  )
}

export default TaxPaymentRequest2024
