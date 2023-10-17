import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const InProgress = () => {
  return <ApplicationStatusEmail variant={variants.inProgress} />;
};

export default InProgress;
