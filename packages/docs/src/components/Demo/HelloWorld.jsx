import { FragmentShader } from "@react-shader/fiber";
import { Assign, Main, Output, Vec4 } from "@react-shader/stdlib";

const HelloWorld = () => {
  const color = <Output type={"vec4"} id={"fragColor"} />;

  return (
    <FragmentShader>
      {color}
      <Main>
        <Assign to={color}>
          <Vec4 x={1} y={0} z={0} w={1} />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default HelloWorld;
