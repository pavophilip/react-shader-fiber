import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { sqrt } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
  }>
>(function Sqrt({ a }, ref) {
  return <Base ref={ref} gen={sqrt} args={[a]} />;
});
