import RSF from "@react-shader/renderer";
import { expect, test } from "vitest";
import { program, vec4 } from "@thi.ng/shader-ast";
import Vec4 from "../src/components/Vec4.jsx";

test("Vec4", () => {
  const ast = RSF.render(<Vec4 x={0} y={0} z={0} />);

  expect(ast).toEqual(program([vec4(0, 0, 0, 1)]));
});
