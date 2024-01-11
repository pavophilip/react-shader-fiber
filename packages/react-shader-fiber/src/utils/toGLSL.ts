import { GLSLVersion, targetGLSL } from "@thi.ng/shader-ast-glsl";

const toGLSL = (prelude: string) =>
  targetGLSL({
    version: GLSLVersion.GLES_300,
    versionPragma: true,
    type: "fs",
    prelude: `precision mediump float; \n${prelude}`,
  });

export default toGLSL;
