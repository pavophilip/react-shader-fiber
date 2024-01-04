import { ReactNode, useMemo } from "react";
import { render } from "@react-shader/renderer";
import FragmentShaderProvider from "../providers/FragmentShaderProvider.tsx";

const useRenderShader = (el?: ReactNode) => {
  return useMemo(
    () => render(<FragmentShaderProvider>{el}</FragmentShaderProvider>),
    [el],
  );
};

export default useRenderShader;
