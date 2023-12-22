import Base from "./Base.jsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { float } from "@thi.ng/shader-ast";

const Float = forwardRef<
  FC,
  PropsWithChildren<{
    value: number;
  }>
>(({ value }, ref) => {
  return <Base ref={ref} gen={float} args={[value]} />;
});

export default Float;
