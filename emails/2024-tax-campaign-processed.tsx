import * as React from 'react'
import { Column, Heading, Text, Row } from '@react-email/components'
import { kontoTexts as texts } from '../utils/translations'
import BasicEmail from '../components/BasicEmail'
import { Markdown } from '@react-email/markdown'
import LinkButton from '../components/LinkButton'
import Footer from '../components/Footer'
import { VariantFooter } from '../utils/enums'

const heading = {
  paddingTop: '24px',
  paddingBottom: '24px',
  fontWeight: '600',
  fontSize: '28px',
  lineHeight: '36px',
} as React.CSSProperties

const containerMain = {
  paddingBottom: '32px',
}

export const Delivered = () => {
  return (
    <BasicEmail>
      <Heading as="h1" style={{ ...containerMain, ...heading }}>
        {texts.campaignTaxesProcessed.title}
      </Heading>
      {texts.salutation}
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: '0px' },
        }}
      >
        {texts.campaignTaxesProcessed.content}
      </Markdown>

      <div style={{ marginTop: '32px' }}></div>

      <LinkButton
        href={texts.campaignTaxesProcessed.buttonAddress}
        isBlock
        text={texts.campaignTaxesProcessed.buttonTitle}
      />
      <div style={{ marginTop: '32px' }}></div>
      <Markdown
        markdownCustomStyles={{
          p: { marginBottom: '0px' },
        }}
      >
        {texts.footer2024}
      </Markdown>
      <Footer variant={VariantFooter.using} />
      <Markdown
        markdownCustomStyles={{
          p: {
            marginBottom: '0px',
            marginTop: '24px',
            textAlign: 'center',
          },
        }}
      >
        {texts.unsubscribe}
      </Markdown>
    </BasicEmail>
  )
}

export default Delivered
