import { Link } from "@react-email/components";
import * as React from "react";

const fullWidthButton = {
  minWidth: "150px",
  color: "#FFFFFF",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: "#D83728",
  textAlign: "center",
  verticalAlign: "middle",
  display: "table-cell",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "16px",
  paddingRight: "16px",
} as React.CSSProperties;

const LinkButton = ({ text, isBlock, href }) => (
  <Link
    href={href}
    style={{ ...fullWidthButton, ...(isBlock ? { width: "100vw" } : {}) }}
  >
    {text}
  </Link>
);

export default LinkButton;
