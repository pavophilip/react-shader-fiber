import { useContext } from "react";
import { ShaderProviderContext } from "../providers/ShaderProvider.tsx";

const useCoords = () => {
  return useContext(ShaderProviderContext).coords;
};

export default useCoords;
