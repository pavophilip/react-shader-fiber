import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { Float } from "../../lit/Float.tsx";
import { degrees } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    radians: Float | ReactElement;
  }>
>(function Degrees({ radians }) {
  return <Base gen={degrees} args={[radians]} />;
});
