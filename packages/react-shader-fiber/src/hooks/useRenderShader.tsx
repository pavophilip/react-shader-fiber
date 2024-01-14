import { ReactNode, useState } from "react";
import { render } from "@react-shader/renderer";

const useRenderShader = (el?: ReactNode) => {
  const [tree, setTree] = useState(null);
  return tree || render(el, setTree);
};

export default useRenderShader;
