import { testRender } from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import { abs, acos, asin, float } from "@thi.ng/shader-ast";
import { Abs, Acos, Asin } from "../components/builtin/math";

test("Abs", () => {
  const ast = testRender(<Abs a={-0.5} />);

  expect(ast[0]).toEqual(abs(float(-0.5)));
});

test("Acos", () => {
  const ast = testRender(<Acos of={0.5} />);

  expect(ast[0]).toEqual(acos(float(0.5)));
});

test("Asin", () => {
  const ast = testRender(<Asin of={0.5} />);

  expect(ast[0]).toEqual(asin(float(0.5)));
});
