import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $y } from "@thi.ng/shader-ast";
import { Vec } from "../lit/Vec.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec | ReactElement[] | ReactElement;
  }>
>(function Y({ of }, ref) {
  return <Base ref={ref} gen={$y} args={[of]} />;
});
