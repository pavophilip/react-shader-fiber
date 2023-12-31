import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { div } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";

export default forwardRef<FC, PropsWithChildren>(function Divide(
  { children },
  ref,
) {
  return <Base ref={ref} gen={div} args={[...normalizeChildren(children)]} />;
});
