import { testRenderer } from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import { float, input } from "@thi.ng/shader-ast";
import { funcall } from "@thi.ng/shader-ast/ast/function";
import { Call, Float } from "../components/glsl";
import VCoords from "../components/glsl/VCoords.tsx";

test("Call Fn", () => {
  const ast = testRenderer(
    <Call fn={"circle"} type={"float"}>
      <VCoords />
      <Float value={0.5} />
    </Call>,
  );

  expect(ast[0]).toEqual(
    funcall("circle", "float", input("vec2", "vCoords"), float(0.5)),
  );
});
