import RSF from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import { float, input, program } from "@thi.ng/shader-ast";
import { funcall } from "@thi.ng/shader-ast/ast/function";
import Call from "../src/components/Call.jsx";
import Float from "../src/components/Float.jsx";

test("Call Fn", () => {
  const ast = RSF.render(
    <Call fn={"circle"} type={"float"}>
      {input("vec2", "vCoords")}
      <Float value={0.5} />
    </Call>,
  );

  expect(ast).toEqual(
    program([funcall("circle", "float", input("vec2", "vCoords"), float(0.5))]),
  );
});
