import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { smoothstep } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
    b: Float | ReactElement;
    x: Float | ReactElement;
  }>
>(function SmoothStep({ a, b, x }) {
  return <Base gen={smoothstep} args={[a, b, x]} />;
});
