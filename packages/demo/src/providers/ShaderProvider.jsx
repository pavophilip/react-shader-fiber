import { createContext, useContext } from "react";

const ShaderProviderContext = createContext({});
export const useTime = () => {
  return useContext(ShaderProviderContext).time;
};

export const useColor = () => {
  return useContext(ShaderProviderContext).color;
};
export const useCoords = () => {
  return useContext(ShaderProviderContext).coords;
};

const ShaderProvider = ({ time, coords, color, children }) => {
  return (
    <ShaderProviderContext.Provider
      value={{
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
