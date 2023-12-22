import { float, mix } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren, ReactNode } from "react";
import Base from "./Base.jsx";
import normalizeChildren from "../../utils/normalizeChildren.ts";

const Mix = forwardRef<
  FC,
  PropsWithChildren<{
    a: number | ReactNode;
  }>
>(({ a, children }, ref) => {
  return (
    <Base
      ref={ref}
      gen={mix}
      args={[
        ...normalizeChildren(children),
        typeof a === "number" ? float(a) : a,
      ]}
    />
  );
});

export default Mix;
