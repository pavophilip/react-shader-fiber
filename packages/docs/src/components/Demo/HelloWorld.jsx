import { Player, Shader, Vec4 } from "@react-shader/fiber";

const HelloWorld = () => {
  return (
    <Player>
      <Shader>
        <Vec4 x={1} y={0} z={0} w={1} />
      </Shader>
    </Player>
  );
};

export default HelloWorld;
