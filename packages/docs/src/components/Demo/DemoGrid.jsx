import { Player, Shader } from "@react-shader/fiber";
import Grid from "./Grid";
import Gradient from "./Gradient";
import { useControls } from "leva";
import Circle from "./Circle";

const DemoGrid = () => {
  const { radius, size } = useControls({
    radius: {
      value: 0.4,
      min: 0,
      max: 1,
    },
    size: {
      value: 5.0,
      min: -10.0,
      max: 10.0,
    },
  });

  return (
    <Player>
      <Shader>
        <Grid size={size}>
          <Circle radius={radius}>
            <Gradient />
          </Circle>
        </Grid>
      </Shader>
    </Player>
  );
};

export default DemoGrid;
