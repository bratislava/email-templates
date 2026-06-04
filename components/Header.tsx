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
  iconVariant?: HeaderIconVariantType | HeaderIconVariantType[];
}

const Header = ({ iconVariant = HeaderIconVariant.city }: HeaderProps) => {
  const iconVariants = Array.isArray(iconVariant) ? iconVariant : [iconVariant];

  return (
    <Row style={{ ...border, paddingTop: "0" }}>
      <Column>
        {/* Outlook doesn't support margin, so we use table to center the image */}
        <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
          <tr>
            <td align="center">
              {iconVariants.map((variant, index) => (
                <Img
                  key={variant.address}
                  height={40}
                  src={variant.address}
                  alt={variant.altName}
                  style={{
                    ...logoImg,
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: index > 0 ? "20px" : "0",
                  }}
                />
              ))}
            </td>
          </tr>
        </table>
      </Column>
    </Row>
  );
};

export default Header;
