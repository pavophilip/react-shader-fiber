import { FC, forwardRef, PropsWithChildren, useMemo } from "react";
import { useCloturPlayer } from "@clotur/player";
import useRenderShader from "../hooks/useRenderShader.tsx";
import toGLSL from "../utils/toGLSL.ts";

const VS = `# version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vCoords;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vCoords = (aVertexPosition.xy + 1.0) / 2.0;
}`;
export default forwardRef<
  FC,
  PropsWithChildren<{
    prelude?: string | string[];
    width?: number;
    height?: number;
  }>
>(function FragmentShader(
  { prelude = "", width = 256, height = 256, children },
  ref,
) {
  const preludeStr = Array.isArray(prelude) ? prelude.join(`\n`) : prelude;

  const tree = useRenderShader(children);

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
      ref={ref}
      {...player}
      style={{
        width,
        height,
      }}
    />
  );
});
