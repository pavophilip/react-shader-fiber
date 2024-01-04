import { FC, PropsWithChildren, ReactElement, useMemo } from "react";
import useRenderShader from "../hooks/useRenderShader.tsx";
import toGLSL from "../utils/toGLSL.ts";
import { useCloturPlayer } from "@clotur/player";

const VS = `# version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vCoords;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vCoords = (aVertexPosition.xy + 1.0) / 2.0;
}`;

const Player: FC<
  PropsWithChildren<{
    width?: number;
    height?: number;
    children: ReactElement;
  }>
> = ({ width = 300, height = 300, children }) => {
  const tree = useRenderShader(children);

  const preludeStr = children?.props.prelude || "";

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
};

export default Player;
