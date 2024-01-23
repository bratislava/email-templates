import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const ErrorTryAgain = () => {
  return <ApplicationStatusEmail variant={variants.errorTryAgain} />;
};

export default ErrorTryAgain;
