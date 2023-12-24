import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $z } from "@thi.ng/shader-ast";
import { Vec4 } from "../lit/Vec4.tsx";
import { Vec3 } from "../lit/Vec3.tsx";
import getFirstChild from "../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of?: Vec3 | Vec4 | ReactElement | ReactElement[];
  }>
>(function Z({ children, of }, ref) {
  return <Base ref={ref} gen={$z} args={[getFirstChild(children) || of]} />;
});
