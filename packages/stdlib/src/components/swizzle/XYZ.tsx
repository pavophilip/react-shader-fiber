import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $xyz } from "@thi.ng/shader-ast";
import { Vec3 } from "../lit/Vec3.tsx";
import { Vec4 } from "../lit/Vec4.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec3 | Vec4 | ReactElement[] | ReactElement;
  }>
>(function XYZ({ of }, ref) {
  return <Base ref={ref} gen={$xyz} args={[of]} />;
});
