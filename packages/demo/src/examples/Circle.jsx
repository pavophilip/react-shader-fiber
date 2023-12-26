import { FragmentShader } from "@react-shader/fiber";
import circle from "../../lygia/draw/circle.glsl";
import {
  Assign,
  Float,
  Input,
  Length,
  Main,
  Output,
  SmoothStep,
  Sub,
  Vec4,
} from "@react-shader/stdlib";
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
              <SmoothStep from={0.3} to={0.3 + 0.001}>
                <Length
                  of={
                    <Sub>
                      {vCoordsRef}
                      <Float value={0.5} />
                    </Sub>
                  }
                />
                <Length
                  of={
                    <Sub>
                      {vCoordsRef}
                      <Float value={0.5} />
                    </Sub>
                  }
                />
              </SmoothStep>
            }
            w={1}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Circle;
