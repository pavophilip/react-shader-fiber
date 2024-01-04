import { useMemo } from "react";
import { render } from "@react-shader/renderer";
import FragmentShaderProvider from "../providers/FragmentShaderProvider.jsx";

const useRenderShader = (el) => {
  return useMemo(
    () => render(<FragmentShaderProvider>{el}</FragmentShaderProvider>),
    [el],
  );
};

export default useRenderShader;
