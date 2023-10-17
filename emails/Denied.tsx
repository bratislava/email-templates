import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const Denied = () => {
  return <ApplicationStatusEmail variant={variants.denied} />;
};

export default Denied;
