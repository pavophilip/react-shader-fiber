import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { pow } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
    b: Float | ReactElement;
  }>
>(function Pow({ a, b }) {
  return <Base gen={pow} args={[a, b]} />;
});
