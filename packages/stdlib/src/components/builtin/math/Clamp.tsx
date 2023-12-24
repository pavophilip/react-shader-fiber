import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { clamp } from "@thi.ng/shader-ast";
import { Int } from "../../lit/Int.tsx";
import { Float } from "../../lit/Float.tsx";
import { UInt } from "../../lit/Uint.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    x: Float | Int | UInt | ReactElement;
    min: Float | Int | UInt | ReactElement;
    max: Float | Int | UInt | ReactElement;
  }>
>(function Clamp({ x, min, max }) {
  return <Base gen={clamp} args={[x, min, max]} />;
});
