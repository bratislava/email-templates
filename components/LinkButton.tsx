import { Link } from "@react-email/components";
import * as React from "react";

const fullWidthButton = {
  minWidth: "150px",
  width: "100vw",
  color: "#FFFFFF",
  textDecoration: "none",
  borderRadius: "8px",
  backgroundColor: "#D83728",
  textAlign: "center",
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
  colorVariant?: "red" | "black";
}

const LinkButton = ({ text, href, colorVariant = "red" }: LinkButtonProps) => (
  // Outlook doesn't support link styling, so we use span to expand to full width
  // https://www.emailonacid.com/blog/article/email-development/how-to-code-emails-for-outlook-2016/
  <Link
    href={href}
    style={{
      ...fullWidthButton,
      ...(colorVariant === "black" ? { backgroundColor: "#1F1F1F" } : {}),
    }}
  >
    {text}
  </Link>
);

export default LinkButton;
