import circle from "../../lygia/draw/circle.glsl";
import stroke from "../../lygia/draw/stroke.glsl";
import fbm from "../../lygia/generative/fbm.glsl";
import { Assign, Input, Main, Output, Uniform } from "@react-shader/stdlib";
import { FragmentShader } from "@react-shader/fiber";
import ShaderProvider from "../providers/ShaderProvider.jsx";
import { useRef } from "react";

const Shader = ({ coords, children }) => {
  const color = useRef();
  // const coords = useRef();
  const time = useRef();

  return (
    <FragmentShader prelude={[circle, stroke, fbm]} width={600} height={600}>
      <Output type={"vec4"} id={"fragColor"} ref={color} />

      <Input ref={coords} type={"vec2"} id={"vCoords"} />

      <Uniform ref={time} id={"u_time"} type={"float"} />

      <Main>
        <ShaderProvider color={color} coords={coords} time={time}>
          <Assign to={color}>{children}</Assign>
        </ShaderProvider>
      </Main>
    </FragmentShader>
  );
};

export default Shader;
