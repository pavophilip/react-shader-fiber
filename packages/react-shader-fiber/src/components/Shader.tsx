import ShaderProvider from "../providers/ShaderProvider.tsx";
import { FC, PropsWithChildren } from "react";
import { Assign, Input, Main, Output, Uniform } from "@react-shader/stdlib";

const Shader: FC<
  PropsWithChildren<{
    prelude?: string | string[];
    width?: number;
    height?: number;
  }>
> = ({ prelude = "", children }) => {
  const color = <Output type={"vec4"} id={"fragColor"} />;
  const coords = <Input type={"vec2"} id={"vCoords"} />;
  const time = <Uniform id={"u_time"} type={"float"} />;

  return (
    <ShaderProvider color={color} coords={coords} time={time} prelude={prelude}>
      {color}
      {coords}
      {time}
      <Main>
        <Assign to={color}>{children}</Assign>
      </Main>
    </ShaderProvider>
  );
};

export default Shader;
