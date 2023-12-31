import Shader from "../components/Shader.jsx";
import Color from "../components/Color.jsx";
import Circle from "../components/Circle.jsx";
import Gradient from "../components/Gradient.jsx";
import Grid from "../components/Grid.jsx";

const MyAwesomeShader = () => {
  return (
    <Shader>
      <Grid size={10}>
        <Circle radius={0.4}>
          <Gradient>
            <Color hex={"#f7ff17"} />
            <Color hex={"#ff0000"} />
          </Gradient>
        </Circle>
      </Grid>
    </Shader>
  );
};

export default MyAwesomeShader;
