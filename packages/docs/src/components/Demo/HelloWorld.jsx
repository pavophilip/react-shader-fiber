import { Color, Player, Shader } from "@react-shader/fiber";

const HelloWorld = () => {
  return (
    <Player width={360} height={360}>
      <Shader>
        <Color hex={"#ff0000"} />
      </Shader>
    </Player>
  );
};

export default HelloWorld;
