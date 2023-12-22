import RSF from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import { vec4 } from "@thi.ng/shader-ast";
import Vec4 from "../components/glsl/Vec4.tsx";

test("Vec4", () => {
  const ast = RSF.testRender(<Vec4 x={0} y={0} z={0} />);

  expect(ast[0]).toEqual(vec4(0, 0, 0, 1));
});
