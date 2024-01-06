import { Color, Player, Shader } from "@react-shader/fiber";
import Circle from "./Circle";
import { useControls } from "leva";

const DemoCircle = () => {
  const { color, radius } = useControls({
    color: "#ff51d6",
    radius: {
      value: 0.5,
      min: 0,
      max: 1,
    },
  });

  return (
    <Player>
      <Shader>
        <Circle radius={radius}>
          <Color hex={color} />
        </Circle>
      </Shader>
    </Player>
  );
};

export default DemoCircle;
