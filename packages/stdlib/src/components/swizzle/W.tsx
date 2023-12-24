import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $w } from "@thi.ng/shader-ast";
import { Vec } from "../lit/Vec.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec | ReactElement[] | ReactElement;
  }>
>(function W({ of }, ref) {
  return <Base ref={ref} gen={$w} args={[of]} />;
});
