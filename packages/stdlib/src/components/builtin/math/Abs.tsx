import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { abs } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
  }>
>(function Abs({ a }, ref) {
  return <Base ref={ref} gen={abs} args={[a]} />;
});
