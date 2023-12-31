import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { normalize } from "@thi.ng/shader-ast";
import { Vec } from "../../lit/Vec.tsx";
import Base from "../../glsl/Base.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Vec | ReactElement;
  }>
>(function Normalize({ value }, ref) {
  return <Base ref={ref} gen={normalize} args={[value]} />;
});
