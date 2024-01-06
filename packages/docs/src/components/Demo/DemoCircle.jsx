import { Color, Player, Shader } from "@react-shader/fiber";
import Circle from "./Circle";

const DemoCircle = () => {
  return (
    <Player>
      <Shader>
        <Circle radius={0.5}>
          <Color hex={"#7c24ff"} />
        </Circle>
      </Shader>
    </Player>
  );
};

export default DemoCircle;
