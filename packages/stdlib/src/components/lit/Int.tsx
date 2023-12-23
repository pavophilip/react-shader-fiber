import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { int } from "@thi.ng/shader-ast";

export type Int = number;

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Int | ReactElement;
  }>
>(function Int({ value }) {
  return <Base gen={int} args={[value]} />;
});
