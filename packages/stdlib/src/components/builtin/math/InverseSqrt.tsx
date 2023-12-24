import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { Float } from "../../lit/Float.tsx";
import { inversesqrt } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
  }>
>(function InverseSqrt({ a }, ref) {
  return <Base ref={ref} gen={inversesqrt} args={[a]} />;
});
