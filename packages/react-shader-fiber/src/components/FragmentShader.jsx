import { useMemo } from "react";
import { GLSLVersion, targetGLSL } from "@thi.ng/shader-ast-glsl";
import { useCloturPlayer } from "@clotur/player";
import FragmentShaderProvider from "../providers/FragmentShaderProvider.jsx";
import RSFRenderer from "@react-shader-fiber/renderer";

const VS = `# version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vCoords;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vCoords = (aVertexPosition.xy + 1.0) / 2.0;
}`;

const glsl = (prelude) =>
  targetGLSL({
    version: GLSLVersion.GLES_300,
    versionPragma: true,
    type: "fs",
    prelude: `precision mediump float; \n${prelude}`,
  });

const useRenderShader = (el) => {
  return useMemo(
    () =>
      RSFRenderer.render(<FragmentShaderProvider>{el}</FragmentShaderProvider>),
    [el],
  );
};

const FragmentShader = ({ prelude = "", children }) => {
  const preludeStr = Array.isArray(prelude) ? prelude.join(`\n`) : prelude;

  const tree = useRenderShader(children);

  const params = useMemo(() => {
    return {
      vs: VS,
      fs: tree && glsl(preludeStr)(tree),
      uniforms: {},
    };
  }, [preludeStr, tree]);

  const player = useCloturPlayer(params);

  return (
    <div
      {...player}
      style={{
        width: 600,
        height: 600,
      }}
    ></div>
  );
};

export default FragmentShader;
