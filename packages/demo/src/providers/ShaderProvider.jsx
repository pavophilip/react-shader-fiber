import { createContext, useContext } from "react";

const ShaderContext = createContext({
  time: null,
  coords: null,
  color: null,
});

const useTime = () => {
  return useContext(ShaderContext).time;
};

const useCoords = () => {
  return useContext(ShaderContext).coords;
};

const useColor = () => {
  return useContext(ShaderContext).color;
};

const ShaderProvider = ({ value, children }) => {
  return (
    <ShaderContext.Provider value={value}>{children}</ShaderContext.Provider>
  );
};

export default ShaderProvider;
