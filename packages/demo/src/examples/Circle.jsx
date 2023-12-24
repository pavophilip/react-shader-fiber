import { FragmentShader } from "react-shader-fiber";
import circle from "../../lygia/draw/circle.glsl";
import {
  Assign,
  Call,
  Float,
  Input,
  Main,
  Output,
  Vec4,
} from "@react-shader-fiber/stdlib";
import { useRef } from "react";

const Circle = () => {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  return (
    <FragmentShader prelude={[circle]}>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4
            x={0}
            y={0}
            z={
              <Call fn={"circle"} type={"float"}>
                {vCoordsRef}
                <Float value={0.6} />
              </Call>
            }
            w={1}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Circle;
