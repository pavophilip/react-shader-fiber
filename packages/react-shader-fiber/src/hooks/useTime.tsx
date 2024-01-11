import { useContext } from "react";
import { ShaderProviderContext } from "../providers/ShaderProvider.tsx";

const useTime = () => {
  return useContext(ShaderProviderContext).time;
};

export default useTime;
