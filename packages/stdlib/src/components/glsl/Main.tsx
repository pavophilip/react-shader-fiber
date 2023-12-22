import { defMain } from "@thi.ng/shader-ast";
import Base from "./Base";
import normalizeChildren from "../../utils/normalizeChildren";
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
