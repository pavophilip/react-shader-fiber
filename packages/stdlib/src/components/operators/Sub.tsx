import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { sub } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";

export default forwardRef<FC, PropsWithChildren>(function Sub({ children }) {
  return <Base gen={sub} args={[...normalizeChildren(children)]} />;
});
