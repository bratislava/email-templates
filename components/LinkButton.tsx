import { Link } from "@react-email/components";
import * as React from "react";

const fullWidthButton = {
  minWidth: "150px",
  color: "#FFFFFF",
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
  <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
    <tr>
      <td align="center">
        <span
          style={{
            ...fullWidthButton,
            ...(colorVariant === "black" ? { backgroundColor: "#1F1F1F" } : {}),
          }}
        >
          <Link
            href={href}
            style={{
              ...{
                // This is a workaround to make the link take the full width, sadly there is no workaround for old (2006) Outlook
                display: "table-cell",
                width: "100vw",
                color: "#FFFFFF",
              },
            }}
          >
            {text}
          </Link>
        </span>
      </td>
    </tr>
  </table>
);

export default LinkButton;
