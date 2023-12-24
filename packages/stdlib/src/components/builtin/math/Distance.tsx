import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { Vec } from "../../lit/Vec.tsx";
import Base from "../../glsl/Base.tsx";
import { distance } from "@thi.ng/shader-ast";

export default forwardRef<
  FC,
  PropsWithChildren<{
    from: Vec | ReactElement;
    to: Vec | ReactElement;
  }>
>(function Distance({ from, to }) {
  return <Base gen={distance} args={[from, to]} />;
});
