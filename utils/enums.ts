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

export enum VariantFooter {
  develop = "develop",
  using = "using",
}

export type HeaderIconVariantType = {
  address: string;
  altName: string;
};
