import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $z } from "@thi.ng/shader-ast";
import { Vec4 } from "../lit/Vec4.tsx";
import { Vec3 } from "../lit/Vec3.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Vec3 | Vec4 | ReactElement | ReactElement[];
  }>
>(function Z({ of }, ref) {
  return <Base ref={ref} gen={$z} args={[of]} />;
});
