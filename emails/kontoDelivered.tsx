import * as React from "react";
import ApplicationStatusEmail, {
  variants,
} from "../components/ApplicationStatusEmail";

export const Delivered = () => {
  return <ApplicationStatusEmail variant={variants.delivered} />;
};

export default Delivered;
