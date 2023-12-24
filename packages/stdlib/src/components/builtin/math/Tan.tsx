import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { tan } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Float | ReactElement;
  }>
>(function Tan({ of }) {
  return <Base gen={tan} args={[of]} />;
});
