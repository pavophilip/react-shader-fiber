import { FragmentShader } from "react-shader-fiber";
import {
  Assign,
  Float,
  Fract,
  Input,
  Main,
  Mul,
  Output,
  Step,
  Vec4,
  X,
} from "@react-shader-fiber/stdlib";
import { useRef } from "react";

const Gradient = () => {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  return (
    <FragmentShader>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4
            x={0.1}
            y={0.1}
            z={
              <Step
                a={
                  <Fract
                    a={
                      <X
                        of={
                          <Mul>
                            {vCoordsRef}
                            <Float value={10} />
                          </Mul>
                        }
                      />
                    }
                  />
                }
                b={0.5}
              />
            }
            w={1}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Gradient;