import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { uint } from "@thi.ng/shader-ast";

export type UInt = number;

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: UInt | ReactElement;
  }>
>(function Uint({ value }, ref) {
  return <Base ref={ref} gen={uint} args={[value]} />;
});
