import { FC, forwardRef, PropsWithChildren } from "react";
import { input, Type } from "@thi.ng/shader-ast";
import Base from "../glsl/Base.tsx";
import { SymOpts } from "@thi.ng/shader-ast/api/syms";

const Input = forwardRef<
  FC,
  PropsWithChildren<{
    type: Type;
    id: string;
    opts?: SymOpts;
  }>
>(({ type, id, opts = {} }, ref) => {
  return <Base ref={ref} gen={input} args={[type, id, opts]} />;
});

export default Input;
