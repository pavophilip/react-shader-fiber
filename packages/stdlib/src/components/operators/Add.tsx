import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";
import { add } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";

export default forwardRef<FC, PropsWithChildren>(function Add({ children }) {
  return <Base gen={add} args={[...normalizeChildren(children)]} />;
});
