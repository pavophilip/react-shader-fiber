import { toGLSL, useRenderShader } from "@react-shader/fiber";

const GLSLOutput = ({ component }) => {
  const ast = useRenderShader(component().props.children);
  return toGLSL("")(ast);
};

export default GLSLOutput;
