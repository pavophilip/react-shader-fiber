import { ReactNode } from "react";
import { render } from "@react-shader/renderer";

const useRenderShader = (
  el: ReactNode,
  onUpdateRef: { current: (tree: object) => void },
) => {
  return render(el, (tree: object) => {
    onUpdateRef.current(tree);
  });
};

export default useRenderShader;
