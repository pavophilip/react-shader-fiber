import { toGLSL, useRenderShader } from "@react-shader/fiber";
import { indent } from "indent.js";

const GLSLOutput = ({ component }) => {
  const Component = component();

  const ast = useRenderShader(Component.props.children);
  return indent.js(toGLSL(Component.props.children.props.prelude || "")(ast), {
    tabString: "    ",
  });
};

export default GLSLOutput;
