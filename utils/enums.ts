export enum StatusImgVariants {
  success = "success",
  error = "error",
  cross = "cross",
  hourglass = "hourglass",
  sent = "sent",
  castle = "castle",
}

export type Variant = {
  titleText: string;
  statusImg: StatusImgVariants;
  text: string;
};
