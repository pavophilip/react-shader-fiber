import { vec4 } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren, ReactNode } from "react";
import Base from "./Base.jsx";

const Vec4 = forwardRef<
  FC,
  PropsWithChildren<{
    x: number | ReactNode;
    y: number | ReactNode;
    z: number | ReactNode;
    w?: number | ReactNode;
  }>
>(({ x, y, z, w = 1.0, ...props }, ref) => {
  return <Base ref={ref} gen={vec4} args={[x, y, z, w]} {...props} />;
});

export default Vec4;
