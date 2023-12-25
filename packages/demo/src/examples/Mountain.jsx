import { FragmentShader } from "react-shader-fiber";
import circle from "../../lygia/draw/circle.glsl";
import stroke from "../../lygia/draw/stroke.glsl";
import fbm from "../../lygia/generative/fbm.glsl";
import {
  Add,
  Assign,
  Float,
  Input,
  Main,
  Mul,
  Output,
  Uniform,
  Vec2,
  Vec4,
  X,
  Y,
} from "@react-shader-fiber/stdlib";
import { useRef } from "react";
import Stroke from "../components/rsf-lygia/Stroke.jsx";
import FractalBrownianMotion from "../components/rsf-lygia/FractalBrownianMotion.jsx";

const Mountain = () => {
  const fragColorRef = useRef();
  const st = useRef();
  const time = useRef();

  return (
    <FragmentShader prelude={[circle, stroke, fbm]}>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={st} type={"vec2"} id={"vCoords"} />

      <Uniform ref={time} id={"u_time"} type={"float"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4
            x={0}
            y={0}
            z={
              <Stroke
                x={<Y of={st} />}
                size={
                  <Mul>
                    <FractalBrownianMotion>
                      <Vec2
                        x={
                          <Add>
                            <X>{st}</X>
                            <Mul>
                              {time}
                              <Float value={0.1} />
                            </Mul>
                          </Add>
                        }
                        y={0.5}
                      />
                    </FractalBrownianMotion>
                    <Float value={0.2} />
                  </Mul>
                }
                width={0.5}
              />
            }
            w={1.0}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Mountain;
