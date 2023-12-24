import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { atan } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    y?: Float | ReactElement;
    x?: Float | ReactElement;
    of?: Float | ReactElement;
  }>
>(function Atan({ of, y, x }, ref) {
  return <Base ref={ref} gen={atan} args={of ? [of] : [y, x]} />;
});
