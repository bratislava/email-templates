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
  showFeedback?: boolean;
  footerVariant: FooterVariant;
  showUnsubscribe?: boolean;
};

export enum FooterVariant {
  develop = "develop",
  using = "using",
  olo = "olo",
}

export type HeaderIconVariantType = {
  address: string;
  altName: string;
};

export enum Language {
  en = "en",
  sk = "sk",
}
