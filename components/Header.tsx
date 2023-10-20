import { Column, Img, Row } from "@react-email/components";

import * as React from "react";

import { cdnImageAddress } from "../utils/constants";

const logoImg = {
  margin: "20px auto",
};

const border = {
  borderBottom: "solid 2px",
  borderColor: "#D6D6D6",
  paddingTop: "24px",
  margin: 0,
};

const Header = () => (
  <Row style={{ ...border, paddingTop: "0" }}>
    <Column>
      <Img
        height={40}
        src={`${cdnImageAddress}/bratislava-castle-medium.png`}
        alt="Mesto Bratislava"
        style={logoImg}
      />
    </Column>
  </Row>
);

export default Header;
