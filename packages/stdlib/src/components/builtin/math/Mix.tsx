import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../../glsl/Base.tsx";
import { mix } from "@thi.ng/shader-ast";
import { Float } from "../../lit/Float.tsx";

export default forwardRef<
  FC,
  PropsWithChildren<{
    a: Float | ReactElement;
    b: Float | ReactElement;
    c: Float | ReactElement;
  }>
>(function Mix({ a, b, c }) {
  return <Base gen={mix} args={[a, b, c]} />;
});
