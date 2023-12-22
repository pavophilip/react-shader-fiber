import { sym } from "@thi.ng/shader-ast";
import { FC, forwardRef, PropsWithChildren } from "react";
import Base from "./Base.jsx";

const Sym = forwardRef<FC, PropsWithChildren>(({ children }, ref) => {
  return <Base ref={ref} gen={sym} args={[children]} />;
});

export default Sym;
