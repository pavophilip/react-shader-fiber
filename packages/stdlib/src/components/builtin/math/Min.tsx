import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { min } from "@thi.ng/shader-ast";
import { Int } from "../../lit/Int.tsx";
import { Float } from "../../lit/Float.tsx";
import { UInt } from "../../lit/Uint.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | Int | UInt | ReactElement;
    b: Float | Int | UInt | ReactElement;
  }>
>(function Min({ a, b }, ref) {
  return <Base ref={ref} gen={min} args={[a, b]} />;
});
