import { Float, Mul } from "@react-shader/stdlib";
import {
  Fract,
  Player,
  Shader,
  ShaderProvider,
  useColor,
  useCoords,
  useTime,
  Vec4,
  X,
  Y,
} from "@react-shader/fiber";

const Grid = ({ size, children }) => {
  const coords = useCoords();
  const time = useTime();
  const color = useColor();

  return (
    <ShaderProvider
      coords={
        <Mul>
          {coords}
          <Float value={size} />
        </Mul>
      }
      color={color}
      time={time}
    >
      {children}
    </ShaderProvider>
  );
};

const Gradient = () => {
  const coords = useCoords();
  return (
    <Vec4
      x={<Fract of={<X of={coords} />} />}
      y={<Fract of={<Y of={coords} />} />}
      z={1.0}
      w={1}
    />
  );
};

const GridDemo = () => {
  return (
    <Player>
      <Shader>
        <Grid size={10}>
          <Gradient />
        </Grid>
      </Shader>
    </Player>
  );
};

export default GridDemo;
