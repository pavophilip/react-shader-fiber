import { FragmentShader } from "@react-shader/fiber";
import {
  Add,
  Assign,
  Float,
  Fract,
  Input,
  Main,
  Mul,
  Output,
  Sin,
  Step,
  Uniform,
  Vec4,
  X,
} from "@react-shader/stdlib";
import { useRef } from "react";

const Gradient = () => {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();
  const time = useRef();

  return (
    <FragmentShader>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Uniform ref={time} id={"u_time"} type={"float"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4
            x={0.1}
            y={0.1}
            z={
              <Step edge={0.5}>
                <Fract>
                  <Mul>
                    <X>
                      <Add>
                        {vCoordsRef}
                        <Sin of={time} />
                      </Add>
                    </X>
                    <Float value={2} />
                  </Mul>
                </Fract>
              </Step>
            }
            w={1}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Gradient;
