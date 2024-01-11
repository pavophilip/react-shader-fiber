import {
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import useRenderShader from "../hooks/useRenderShader.tsx";
import toGLSL from "../utils/toGLSL.ts";
import { useCloturPlayer } from "@clotur/player";
import PreludeProvider from "../providers/PreludeProvider.tsx";
import fallbackFs from "../glsl/fallback.frag?raw";

const VS = `# version 300 es
in vec4 aVertexPosition;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vCoords;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vCoords = (aVertexPosition.xy + 1.0) / 2.0;
}`;

const normalizePrelude = (prelude: string | string[] | undefined) => {
  if (typeof prelude === "string") {
    return [prelude];
  }

  if (Array.isArray(prelude)) {
    return prelude;
  }

  return [];
};

const Player: FC<
  PropsWithChildren<{
    debug?: boolean;
    width?: number;
    height?: number;
    children: ReactElement;
    onUpdateTree?: (tree: object) => void;
    onUpdatePrelude?: (prelude: string) => void;
    onUpdateGlsl?: (glsl: string) => void;
  }>
> = ({
  width = 300,
  height = 300,
  onUpdateTree,
  onUpdatePrelude,
  onUpdateGlsl,
  debug = false,
  children,
}) => {
  const [prelude, setPrelude] = useState<string[]>(
    normalizePrelude(children?.props.prelude),
  );

  const tree = useRenderShader(
    <PreludeProvider setPrelude={setPrelude}>
      {cloneElement(children, {
        prelude,
      })}
    </PreludeProvider>,
  );

  const preludeStr = useMemo(() => {
    return prelude.join("\n");
  }, [prelude]);

  const fs = useMemo(() => {
    return toGLSL(preludeStr)(tree);
  }, [preludeStr, tree]);

  useEffect(() => {
    if (onUpdateTree) onUpdateTree(tree);
  }, [onUpdateTree, tree]);

  useEffect(() => {
    if (onUpdatePrelude) onUpdatePrelude(preludeStr);
  }, [onUpdatePrelude, preludeStr]);

  useEffect(() => {
    if (onUpdateGlsl) onUpdateGlsl(fs);
  }, [onUpdateGlsl, fs]);

  const params = useMemo(() => {
    return {
      vs: VS,
      fs,
      fallback: {
        fs: fallbackFs,
      },
      uniforms: {},
      debug,
    };
  }, [debug, fs]);

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
