import * as React from 'react'
import { Heading, Text } from '@react-email/components'

import LinkButton from './LinkButton'
import { kontoTexts as texts } from '../utils/translations'

const border = {
  borderBottom: 'solid 2px',
  borderColor: '#D6D6D6',
  paddingTop: '36px',
  margin: 0,
} as React.CSSProperties

const feedback = {
  paddingTop: '32px',
  paddingBottom: '16px',
  margin: 0,
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '28px',
} as React.CSSProperties

const Feedback = () => (
  <>
    <Text style={border} />
    <Heading as="h2" style={feedback}>
      {texts.feedbackTitle}
    </Heading>
    <LinkButton href="{{feedbackLink}}" isBlock text={texts.feedbackButton} />
  </>
)

export default Feedback
