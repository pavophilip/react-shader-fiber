import { useCoords } from "../providers/ShaderProvider.jsx";
import {
  Float,
  Fract,
  Length,
  Mix,
  SmoothStep,
  Sub,
  Vec4,
} from "@react-shader/stdlib";

const Circle = ({ radius, children }) => {
  const coords = useCoords();

  return (
    <Mix
      a={<Vec4 x={0} y={0} z={0} w={1} />}
      b={children}
      c={
        <SmoothStep
          from={radius}
          to={
            <Sub>
              {radius}
              <Float value={0.001} />
            </Sub>
          }
        >
          <Length
            of={
              <Sub>
                {<Fract of={coords} />}
                <Float value={0.5} />
              </Sub>
            }
          />
        </SmoothStep>
      }
    />
  );
};

export default Circle;
