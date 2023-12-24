import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { ceil } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Float | ReactElement;
  }>
>(function Ceil({ value }, ref) {
  return <Base ref={ref} gen={ceil} args={[value]} />;
});
