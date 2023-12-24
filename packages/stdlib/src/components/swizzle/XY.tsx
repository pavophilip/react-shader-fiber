import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { $xy } from "@thi.ng/shader-ast";
import { Vec2 } from "../lit/Vec2.tsx";
import { Vec3 } from "../lit/Vec3.tsx";
import { Vec4 } from "../lit/Vec4.tsx";
import getFirstChild from "../../utils/getFirstChild.ts";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of?: Vec2 | Vec3 | Vec4 | ReactElement[] | ReactElement;
  }>
>(function XY({ of, children }, ref) {
  return <Base ref={ref} gen={$xy} args={[getFirstChild(children) || of]} />;
});
