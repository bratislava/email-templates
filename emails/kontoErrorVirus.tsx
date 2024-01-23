import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const ErrorVirus = () => {
  return <ApplicationStatusEmail variant={variants.errorVirus} />;
};

export default ErrorVirus;
