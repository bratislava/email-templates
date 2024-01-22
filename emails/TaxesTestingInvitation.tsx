import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const TaxesTestingInvitation = () => {
  return <ApplicationStatusEmail variant={variants.taxesTestingInvitation} />;
};

export default TaxesTestingInvitation;
