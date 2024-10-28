import { Column, Img, Row } from "@react-email/components";

import * as React from "react";

import { HeaderIconVariant } from "../utils/constants";
import { HeaderIconVariantType } from "../utils/enums";

const logoImg = {
  margin: "20px auto",
};

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "24px",
  margin: 0,
};
interface HeaderProps {
  iconVariant?: HeaderIconVariantType;
}

const Header = ({ iconVariant = HeaderIconVariant.city }: HeaderProps) => (
  <Row style={{ ...border, paddingTop: "0" }}>
    <Column>
      <Img
        height={40}
        src={iconVariant.address}
        alt={iconVariant.altName}
        style={logoImg}
      />
    </Column>
  </Row>
);

export default Header;
