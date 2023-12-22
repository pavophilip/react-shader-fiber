import { $x } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren, ReactNode } from "react";
import Base from "./Base.jsx";

const X = forwardRef<
  FC,
  PropsWithChildren<{
    from: ReactNode;
  }>
>(({ from }, ref) => {
  return <Base gen={$x} args={[from]} ref={ref} />;
});

export default X;
