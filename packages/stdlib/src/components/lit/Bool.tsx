import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { bool } from "@thi.ng/shader-ast";

export type Bool = boolean;

export default forwardRef<
  FC,
  PropsWithChildren<{
    value: Bool | ReactElement;
  }>
>(function Bool({ value }) {
  return <Base gen={bool} args={[value]} />;
});
