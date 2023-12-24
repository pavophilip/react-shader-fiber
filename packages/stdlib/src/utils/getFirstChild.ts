import normalizeChildren from "./normalizeChildren.ts";
import { ReactNode } from "react";

const getFirstChild = (children: ReactNode) => {
  return normalizeChildren(children)[0];
};

export default getFirstChild;
