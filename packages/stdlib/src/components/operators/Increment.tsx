import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { inc } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: ReactElement;
  }>
>(function Increment({ value }) {
  return <Base gen={inc} args={[value]} />;
});