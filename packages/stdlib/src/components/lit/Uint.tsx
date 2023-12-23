import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { uint } from "@thi.ng/shader-ast";

export type Int = number;

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Int | ReactElement;
  }>
>(function Uint({ value }) {
  return <Base gen={uint} args={[value]} />;
});
