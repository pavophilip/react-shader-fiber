import { testRender } from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import { float } from "@thi.ng/shader-ast";
import Float from "./Float.tsx";

test("Provide float", () => {
  const ast = testRender(<Float value={0.5} />);

  expect(ast[0]).toEqual(float(0.5));
});

test("Provide nested", () => {
  const ast = testRender(<Float value={<Float value={0.1} />} />);

  expect(ast[0]).toEqual(float(float(0.1)));
});
