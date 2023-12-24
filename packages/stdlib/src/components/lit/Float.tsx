import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { float } from "@thi.ng/shader-ast";

export type Float = number;
export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Float | ReactElement;
  }>
>(function Float({ value }, ref) {
  return <Base ref={ref} gen={float} args={[value]} />;
});
