import { forwardRef, useMemo } from "react";
import { useCloturPlayer } from "@clotur/player";
import useRenderShader from "../hooks/useRenderShader.jsx";
import toGLSL from "../utils/toGLSL.js";

const VS = `# version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vCoords;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vCoords = (aVertexPosition.xy + 1.0) / 2.0;
}`;

const FragmentShader = forwardRef(
  ({ prelude = "", width = 256, height = 256, children }, ref) => {
    const preludeStr = Array.isArray(prelude) ? prelude.join(`\n`) : prelude;

    const tree = useRenderShader(children);

    ref && ref(tree);

    const params = useMemo(() => {
      return {
        vs: VS,
        fs: tree && toGLSL(preludeStr)(tree),
        uniforms: {},
      };
    }, [preludeStr, tree]);

    const player = useCloturPlayer(params);

    return (
      <div
        {...player}
        style={{
          width,
          height,
        }}
      />
    );
  },
);

export default FragmentShader;
