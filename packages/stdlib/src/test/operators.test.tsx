import { expect, test } from "vitest";
import { testRender } from "@react-shader-fiber/renderer";
import {
  add,
  assign,
  div,
  float,
  mul,
  output,
  sub,
  vec4,
} from "@thi.ng/shader-ast";
import { Float, Vec4 } from "../components/lit";
import { Add, Assign, Divide, Mul, Output, Sub } from "../main.ts";

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

test("Assign", () => {
  const ast = testRender(
    <Assign to={<Output type={"vec4"} id={"fragColor"} />}>
      <Vec4 x={0} y={0} z={1} w={1} />
    </Assign>,
  );

  expect(ast[0]).toEqual(assign(output("vec4", "fragColor"), vec4(0, 0, 1, 1)));
});
