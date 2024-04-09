import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const Success = () => {
  return <ApplicationStatusEmail variant={variants.success} />;
};

export default Success;
