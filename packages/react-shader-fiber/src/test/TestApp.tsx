import { Color, Player, Shader } from "../components";
import gradient from "./gradient.glsl?raw";
import { Call, X } from "@react-shader/stdlib";
import { FC, PropsWithChildren } from "react";
import { useCoords, usePrelude } from "../hooks";

const Gradient: FC<PropsWithChildren> = ({ children }) => {
  usePrelude(gradient);
  const coords = useCoords();

  return (
    <Call fn={"gradient"} type={"vec4"}>
      {children}
      <X of={coords} />
    </Call>
  );
};

const TestApp = () => {
  return (
    <div>
      <Player
        onUpdatePrelude={(prelude) => {
          console.log("prelude", prelude);
        }}
        onUpdateTree={(prelude) => {
          console.log("tree", prelude);
        }}
        onUpdateGlsl={(glsl) => {
          console.log("glsl", glsl);
        }}
      >
        <Shader>
          <Gradient>
            <Color hex={"#3b24ff"} />
            <Color hex={"#ff00ff"} />
          </Gradient>
        </Shader>
      </Player>
    </div>
  );
};

export default TestApp;
