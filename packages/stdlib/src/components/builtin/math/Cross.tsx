import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { Vec } from "../../lit/Vec.tsx";
import Base from "../../glsl/Base.tsx";
import { cross } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Vec | ReactElement;
    b: Vec | ReactElement;
  }>
>(function Cross({ a, b }, ref) {
  return <Base ref={ref} gen={cross} args={[a, b]} />;
});
