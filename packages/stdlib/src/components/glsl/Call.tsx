import Base from "./Base.jsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { funcall } from "@thi.ng/shader-ast/ast/function";
import { Type } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";

const Call = forwardRef<
  FC,
  PropsWithChildren<{
    fn: string;
    type: Type;
  }>
>(({ fn, type, children }, ref) => {
  return (
    <Base
      ref={ref}
      gen={funcall}
      args={[fn, type, ...normalizeChildren(children)]}
    />
  );
});
export default Call;
