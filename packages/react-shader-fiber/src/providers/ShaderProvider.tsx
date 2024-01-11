import { createContext, FC, PropsWithChildren, ReactElement } from "react";
import { Input, Output, Uniform } from "@react-shader/stdlib";

export const ShaderProviderContext = createContext<{
  prelude: string | string[];
  time: ReactElement;
  coords: ReactElement;
  color: ReactElement;
}>({
  prelude: [],
  color: <Output type={"vec4"} id={"fragColor"} />,
  coords: <Input type={"vec2"} id={"vCoords"} />,
  time: <Uniform id={"u_time"} type={"float"} />,
});

const ShaderProvider: FC<
  PropsWithChildren<{
    prelude?: string | string[];
    time: ReactElement;
    coords: ReactElement;
    color: ReactElement;
  }>
> = ({ prelude = [], time, coords, color, children }) => {
  return (
    <ShaderProviderContext.Provider
      value={{
        prelude,
        time,
        coords,
        color,
      }}
    >
      {children}
    </ShaderProviderContext.Provider>
  );
};

export default ShaderProvider;
