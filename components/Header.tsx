import { Column, Img, Row } from "@react-email/components";

import * as React from "react";

import { HeaderIconVariant } from "../utils/constants";
import { HeaderIconVariantType } from "../utils/enums";

const logoImg = {
  padding: "20px 0",
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
      {/* Outlook doesn't support margin, so we use table to center the image */}
      <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
        <tr>
          <td align="center">
            <Img
              height={40}
              src={iconVariant.address}
              alt={iconVariant.altName}
              style={logoImg}
            />
          </td>
        </tr>
      </table>
    </Column>
  </Row>
);

export default Header;
