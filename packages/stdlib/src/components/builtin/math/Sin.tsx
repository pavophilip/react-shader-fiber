import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { sin } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    of: Float | ReactElement;
  }>
>(function Sin({ of }, ref) {
  return <Base ref={ref} gen={sin} args={[of]} />;
});
