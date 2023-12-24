import { expect, test } from "vitest";
import { testRender } from "@react-shader-fiber/renderer";
import { add, div, float, mul, sub } from "@thi.ng/shader-ast";
import { Float } from "../components/lit";
import { Add, Divide, Mul, Sub } from "../components/operators";

test("Add", () => {
  const ast = testRender(
    <Add>
      <Float value={0.5} />
      <Float value={0.2} />
    </Add>,
  );

  expect(ast[0]).toEqual(add(float(0.5), float(0.2)));
});

test("Subtract", () => {
  const ast = testRender(
    <Sub>
      <Float value={0.5} />
      <Float value={0.2} />
    </Sub>,
  );

  expect(ast[0]).toEqual(sub(float(0.5), float(0.2)));
});

test("Multiply", () => {
  const ast = testRender(
    <Mul>
      <Float value={0.3} />
      <Float value={0.2} />
    </Mul>,
  );

  expect(ast[0]).toEqual(mul(float(0.3), float(0.2)));
});

test("Divide", () => {
  const ast = testRender(
    <Divide>
      <Float value={0.6} />
      <Float value={0.2} />
    </Divide>,
  );

  expect(ast[0]).toEqual(div(float(0.6), float(0.2)));
});
