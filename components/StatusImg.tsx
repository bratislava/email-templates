import { Img, Text, Row } from "@react-email/components";
import * as React from "react";
import { cdnImageAddress } from "../utils/constants";
import { StatusImgVariants } from "../utils/enums";

type StatusImgProps = {
  variant?: StatusImgVariants;
};

export const StatusImg = ({
  variant = StatusImgVariants.sent,
}: StatusImgProps) => {
  let icon = "check";
  switch (variant) {
    case "success":
      icon = "check";
      break;
    case "error":
      icon = "exclamation-mark";
      break;
    case "success":
      icon = "check";
      break;
    case "cross":
      icon = "red-cross";
      break;
    case "hourglass":
      icon = "hour-glass";
      break;
    case "sent":
      icon = "sent";
      break;
    default:
      break;
  }
  return (
    <Img height={88} src={`${cdnImageAddress}/${icon}.png`} style={statusImg} />
  );
};

export default StatusImg;

const statusImg = {
  margin: "24px auto",
};
