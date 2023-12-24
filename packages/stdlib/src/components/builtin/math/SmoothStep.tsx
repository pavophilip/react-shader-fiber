import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { smoothstep } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";
import getFirstChild from "../../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    from: Float | ReactElement;
    to: Float | ReactElement;
    x?: Float | ReactElement;
  }>
>(function SmoothStep({ from, to, children, x }, ref) {
  return (
    <Base
      ref={ref}
      gen={smoothstep}
      args={[from, to, getFirstChild(children) || x]}
    />
  );
});
