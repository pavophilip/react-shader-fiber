import {
  Add,
  Call,
  Float,
  Length,
  Mul,
  SmoothStep,
  Sub,
  Vec2,
} from "@react-shader/fiber";

const AAStep = ({ threshold, children }) => {
  const w = (
    <Mul>
      <Float value={0.7} />
      <Length
        of={
          <Vec2
            x={
              <Call fn={"dFdx"} type={"float"}>
                {children}
              </Call>
            }
            y={
              <Call fn={"dFdy"} type={"float"}>
                {children}
              </Call>
            }
          />
        }
      />
    </Mul>
  );

  return (
    <SmoothStep
      from={
        <Sub>
          {threshold}
          {w}
        </Sub>
      }
      to={
        <Add>
          {threshold}
          {w}
        </Add>
      }
    >
      {children}
    </SmoothStep>
  );
};

export default AAStep;
