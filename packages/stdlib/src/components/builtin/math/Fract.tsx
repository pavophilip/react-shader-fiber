import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { fract } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
  }>
>(function Fract({ a }) {
  return <Base gen={fract} args={[a]} />;
});
