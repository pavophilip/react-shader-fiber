import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $x } from "@thi.ng/shader-ast";
import { Vec } from "../lit/Vec.tsx";
import getFirstChild from "../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of?: Vec | ReactElement[] | ReactElement;
  }>
>(function X({ of, children }, ref) {
  return <Base ref={ref} gen={$x} args={[getFirstChild(children) || of]} />;
});
