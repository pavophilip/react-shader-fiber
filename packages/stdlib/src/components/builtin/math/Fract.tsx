import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { fract } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";
import getFirstChild from "../../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of?: Float | ReactElement;
  }>
>(function Fract({ of, children }, ref) {
  return <Base ref={ref} gen={fract} args={[getFirstChild(children) || of]} />;
});
