import { Player, Shader } from "@react-shader/fiber";
import Grid from "./Grid";
import Gradient from "./Gradient";

const DemoGrid = () => {
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

export default DemoGrid;
