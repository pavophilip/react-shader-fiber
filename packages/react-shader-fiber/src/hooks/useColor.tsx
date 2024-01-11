import { useContext } from "react";
import { ShaderProviderContext } from "../providers/ShaderProvider.tsx";

const useColor = () => {
  return useContext(ShaderProviderContext).color;
};

export default useColor;
