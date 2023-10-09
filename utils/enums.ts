export enum StatusImgVariants {
  success = "success",
  error = "error",
  cross = "cross",
  hourglass = "hourglass",
  sent = "sent",
}

export type Variant = {
  titleText: string;
  statusImg: StatusImgVariants;
  text: string;
};
