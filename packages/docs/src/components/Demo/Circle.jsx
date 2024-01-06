import {
  Float,
  Fract,
  Length,
  Mix,
  SmoothStep,
  Sub,
  useCoords,
  Vec4,
} from "@react-shader/fiber";

const Circle = ({ radius, children }) => {
  const coords = useCoords();

  return (
    <Mix
      a={<Vec4 x={0} y={0} z={0} w={0} />}
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
