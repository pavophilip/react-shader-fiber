import {
  Call,
  Float,
  Fract,
  Length,
  Mix,
  Mul,
  SmoothStep,
  Sub,
  useCoords,
  Vec2,
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
          from={<Float value={radius} />}
          to={
            <Sub>
              {radius}
              <Mul>
                <Float value={0.7} />
                <Length
                  of={
                    <Vec2
                      x={
                        <Call fn={"dFdx"} type={"float"}>
                          <Length
                            of={
                              <Sub>
                                {<Fract of={coords} />}
                                <Float value={0.5} />
                              </Sub>
                            }
                          />
                        </Call>
                      }
                      y={
                        <Call fn={"dFdy"} type={"float"}>
                          <Length
                            of={
                              <Sub>
                                {<Fract of={coords} />}
                                <Float value={0.5} />
                              </Sub>
                            }
                          />
                        </Call>
                      }
                    />
                  }
                />
              </Mul>
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
