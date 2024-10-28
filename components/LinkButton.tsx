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
} as React.CSSProperties;

interface LinkButtonProps {
  text: string;
  href: string;
  isBlock?: boolean;
  colorVariant?: "red" | "black";
}

const LinkButton = ({
  text,
  isBlock,
  href,
  colorVariant = "red",
}: LinkButtonProps) => (
  <Link
    href={href}
    style={{
      ...fullWidthButton,
      ...(isBlock ? { width: "100vw" } : {}),
      ...(colorVariant === "black" ? { backgroundColor: "#1F1F1F" } : {}),
    }}
  >
    {text}
  </Link>
);

export default LinkButton;
