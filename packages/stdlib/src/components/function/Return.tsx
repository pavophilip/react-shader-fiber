import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { ret } from "@thi.ng/shader-ast/ast/function";
import normalizeChildren from "../../utils/normalizeChildren.ts";

const Return = forwardRef<FC, PropsWithChildren>(({ children }, ref) => {
  return <Base ref={ref} gen={ret} args={[normalizeChildren(children)[0]]} />;
});
export default Return;
