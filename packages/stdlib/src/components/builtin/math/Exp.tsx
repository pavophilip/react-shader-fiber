import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { exp } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
  }>
>(function Exp({ a }) {
  return <Base gen={exp} args={[a]} />;
});