import { Vec } from "../components/lit/Vec.tsx";
import { ReactElement } from "react";

const normalizeVectorValue = (value: Vec | ReactElement[] | ReactElement) => {
  return value;
};

export default normalizeVectorValue;
