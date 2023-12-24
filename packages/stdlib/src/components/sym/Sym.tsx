import { sym } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren } from "react";
import Base from "../glsl/Base.tsx";
import normalizeChildren from "../../utils/normalizeChildren.ts";

const Sym = forwardRef<
  FC,
  PropsWithChildren<{
    type: string;
    id: string;
    opts?: any;
  }>
>(({ id, type, opts = {}, children }, ref) => {
  return (
    <Base
      ref={ref}
      gen={sym}
      args={[type, id, opts, normalizeChildren(children)[0]]}
    />
  );
});

export default Sym;
