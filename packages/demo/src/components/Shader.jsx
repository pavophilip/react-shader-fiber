import { FragmentShader } from "react-shader-fiber";

import { Input, Main, Output, Uniform } from "@react-shader-fiber/stdlib";
import ShaderProvider from "../providers/ShaderProvider.jsx";

const Shader = ({ time, coords, color, children }) => {
  return (
    <FragmentShader>
      <Output type={"vec4"} id={"fragColor"} ref={color} />

      <Input ref={coords} type={"vec2"} id={"vCoords"} />

      <Uniform ref={time} id={"u_time"} type={"float"} />

      <Main>
        <ShaderProvider
          value={{
            time: time,
            color: color,
            coords: coords,
          }}
        >
          {children}
        </ShaderProvider>
      </Main>
    </FragmentShader>
  );
};

export default Shader;
