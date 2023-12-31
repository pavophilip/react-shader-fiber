import {
  Add,
  Float,
  Max,
  Mul,
  Sub,
  Vec2,
  Vec4,
  X,
  Y,
} from "@react-shader/stdlib";
import { useRef } from "react";
import Stroke from "../components/rsf-lygia/Stroke.jsx";
import FractalBrownianMotion from "../components/rsf-lygia/FractalBrownianMotion.jsx";
import Shader from "../components/Shader.jsx";

const Mountain = ({ height, st, speed, saturation }) => {
  return (
    <Sub>
      <Stroke
        x={
          <Sub>
            <Y of={st} />
            <Float value={height} />
          </Sub>
        }
        size={
          <Mul>
            <FractalBrownianMotion>
              <Vec2
                x={
                  <Add>
                    <X>{st}</X>
                    <Mul>
                      {speed}
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
      <Float value={saturation} />
    </Sub>
  );
};
const Landscape = () => {
  const color = useRef();
  const st = useRef();
  const time = useRef();

  return (
    <Shader color={color} coords={st} time={time}>
      <Vec4
        x={0}
        y={0}
        z={
          <Max
            a={<Mountain height={0.3} st={st} speed={time} saturation={0.5} />}
            b={
              <Mountain
                saturation={0.1}
                st={st}
                height={0.1}
                speed={
                  <Mul>
                    {time}
                    <Float value={2} />
                  </Mul>
                }
              />
            }
          />
        }
        w={1.0}
      />
    </Shader>
  );
};

export default Landscape;
