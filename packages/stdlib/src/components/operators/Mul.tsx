import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { mul } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";

export default forwardRef<FC, PropsWithChildren>(function Mul({ children }) {
  return <Base gen={mul} args={[...normalizeChildren(children)]} />;
});
