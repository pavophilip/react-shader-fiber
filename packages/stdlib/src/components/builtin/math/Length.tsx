import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { Vec } from "../../lit/Vec.tsx";
import Base from "../../glsl/Base.tsx";
import { length } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec | ReactElement;
  }>
>(function Normalize({ of }, ref) {
  return <Base ref={ref} gen={length} args={[of]} />;
});
