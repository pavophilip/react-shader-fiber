import { output, Type } from "@thi.ng/shader-ast";
import { forwardRef, PropsWithChildren, ReactElement } from "react";
import Base from "../glsl/Base.tsx";
import type { SymOpts } from "@thi.ng/shader-ast/api/syms";

const Output = forwardRef<
  ReactElement,
  PropsWithChildren<{ type: Type; id: string; opts?: SymOpts }>
>(({ type, id, opts = {} }, ref) => {
  return <Base ref={ref} gen={output} args={[type, id, opts]} />;
});

export default Output;
