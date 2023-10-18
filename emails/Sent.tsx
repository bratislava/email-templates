import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const Sent = () => {
  return <ApplicationStatusEmail variant={variants.sent} />;
};

export default Sent;
