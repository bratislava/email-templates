import * as React from "react";
import BasicEmail from "../components/BasicEmail";
import { Column, Markdown, Row } from "@react-email/components";
import { HeaderIconVariant } from "../utils/constants";

export const OloEmailForm = () => {
  return (
    <BasicEmail headerIconVariant={HeaderIconVariant.olo}>
      <Row>
        <Column>
          <Markdown
            markdownCustomStyles={{
              p: { marginBottom: "0px" },
            }}
          >
            {"{{applicationName}}"}
          </Markdown>
        </Column>
      </Row>
      <Row>
        <Column>{"{{{htmlData}}}"}</Column>
      </Row>
    </BasicEmail>
  );
};

export default OloEmailForm;
