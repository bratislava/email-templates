import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const PaasTestingInvitation = () => {
  return <ApplicationStatusEmail variant={variants.taxesTestingInvitation} />;
};

export default PaasTestingInvitation;
