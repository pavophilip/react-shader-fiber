import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { acos } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Float | ReactElement;
  }>
>(function Acos({ of }) {
  return <Base gen={acos} args={[of]} />;
});
