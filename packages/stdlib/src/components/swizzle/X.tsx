import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $x } from "@thi.ng/shader-ast";
import { Vec } from "../lit/Vec.tsx";
import normalizeVectorValue from "../../utils/normalizeVectorValue.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec | ReactElement[] | ReactElement;
  }>
>(function X({ of }, ref) {
  return <Base ref={ref} gen={$x} args={[normalizeVectorValue(of)]} />;
});
