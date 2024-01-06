import { Color, Player, Shader } from "@react-shader/fiber";

const HelloWorld = () => {
  return (
    // You can specify size of your canvas
    <Player width={300} height={300}>
      <Shader>
        {/* Child of Shader component (color) will be assigned to the result */}
        <Color hex={"#ff055c"} />
      </Shader>
    </Player>
  );
};

export default HelloWorld;
