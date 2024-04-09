import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const ErrorNotSpecified = () => {
  return <ApplicationStatusEmail variant={variants.errorNotSpecified} />;
};

export default ErrorNotSpecified;
