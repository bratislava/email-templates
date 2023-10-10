import { Img, Text, Row } from '@react-email/components';
import * as React from 'react';

interface StackOverflowTipsEmailProps {
  variant?: 'success' | 'error' | 'cross' | 'hourglass' | 'sent';
}

export const StatusImg = ({
  variant = 'sent',
}: StackOverflowTipsEmailProps) => {
  let icon = 'check';
  switch (variant) {
    case 'success':
      icon = 'check';
      break;
    case 'error':
      icon = 'exclamation-mark';
      break;
    case 'success':
      icon = 'check';
      break;
    case 'cross':
      icon = 'red-cross';
      break;
    case 'hourglass':
      icon = 'hour-glass';
      break;
    case 'sent':
      icon = 'sent';
      break;
    default:
      break;
  }
  return (
    <Img
      height={88}
      src={`${process.env.IMG_URL}/${icon}.png`}
      style={statusImg}
    />
  );
};

export default StatusImg;

const statusImg = {
  margin: '24px auto',
};
