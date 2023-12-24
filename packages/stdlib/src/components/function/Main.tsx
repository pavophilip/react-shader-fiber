import { defMain } from "@thi.ng/shader-ast";
import Base from "../glsl/Base.tsx";
import normalizeChildren from "../../utils/normalizeChildren.ts";
import { FC, ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Base
      gen={defMain}
      args={normalizeChildren(children)}
      processArgs={(args) => {
        return [() => args];
      }}
    />
  );
};

export default Main;
