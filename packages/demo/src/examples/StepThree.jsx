import Shader from "../components/Shader.jsx";
import Color from "../components/Color.jsx";
import Circle from "../components/Circle.jsx";
import Grid from "../components/Grid.jsx";
import Animate from "../components/Animate.jsx";
import { useRef } from "react";
import { Float, Mul, X } from "@react-shader/stdlib";

const MyAwesomeShader = () => {
  const coords = useRef();
  return (
    <Shader coords={coords}>
      <Animate speed={0.1}>
        <Grid size={10}>
          <Circle
            radius={
              <Mul>
                <X of={coords} />
                <Float value={0.5} />
              </Mul>
            }
          >
            <Grid size={1}>
              <Animate speed={0}>
                <Color hex={"#ff3c87"} />
              </Animate>
            </Grid>
          </Circle>
        </Grid>
      </Animate>
    </Shader>
  );
};

export default MyAwesomeShader;
