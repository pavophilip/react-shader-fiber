import { FragmentShader } from "react-shader-fiber";
import circle from "../../lygia/draw/circle.glsl";
import { Assign, Input, Main, Output, Vec4 } from "@react-shader-fiber/stdlib";
import { useRef } from "react";

const Gradient = () => {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  return (
    <FragmentShader prelude={[circle]}>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4 x={0} y={0} z={0} w={1} />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Gradient;
