import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { mod } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
    b: Float | ReactElement;
  }>
>(function Mod({ a, b }, ref) {
  return <Base ref={ref} gen={mod} args={[a, b]} />;
});
