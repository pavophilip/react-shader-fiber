import { assign } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren, ReactNode, Ref } from "react";
import Base from "../glsl/Base.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    to: Ref<ReactNode> | ReactNode;
  }>
>(function Assign({ to, children }, ref) {
  return <Base ref={ref} gen={assign} args={[to, children]} />;
});
