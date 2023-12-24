import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { radians } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    degrees: Float | ReactElement;
  }>
>(function Radians({ degrees }, ref) {
  return <Base ref={ref} gen={radians} args={[degrees]} />;
});
