import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { step } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";
import getFirstChild from "../../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    edge: Float | ReactElement;
    x?: Float | ReactElement;
  }>
>(function Step({ edge, x, children }, ref) {
  return (
    <Base ref={ref} gen={step} args={[edge, getFirstChild(children) || x]} />
  );
});
