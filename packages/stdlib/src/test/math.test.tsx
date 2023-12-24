import { testRender } from "@react-shader-fiber/renderer";
import { expect, test } from "vitest";
import {
  abs,
  acos,
  asin,
  atan,
  ceil,
  clamp,
  cos,
  cross,
  degrees,
  distance,
  dot,
  exp,
  exp2,
  float,
  floor,
  fract,
  inversesqrt,
  length,
  log,
  log2,
  max,
  min,
  mix,
  mod,
  normalize,
  pow,
  radians,
  sign,
  sin,
  smoothstep,
  sqrt,
  step,
  tan,
  vec2,
  vec3,
} from "@thi.ng/shader-ast";
import {
  Abs,
  Acos,
  Asin,
  Atan,
  Ceil,
  Clamp,
  Cos,
  Cross,
  Degrees,
  Distance,
  Dot,
  Exp,
  Exp2,
  Float,
  Floor,
  Fract,
  InverseSqrt,
  Length,
  Log,
  Log2,
  Max,
  Min,
  Mix,
  Mod,
  Normalize,
  Pow,
  Radians,
  Sign,
  Sin,
  SmoothStep,
  Sqrt,
  Step,
  Tan,
  Vec2,
  Vec3,
} from "../main.ts";

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

test("Atan", () => {
  const ast = testRender(<Atan of={0.5} />);

  expect(ast[0]).toEqual(atan(float(0.5)));
});

test("Ceil", () => {
  const ast = testRender(<Ceil value={0.5} />);

  expect(ast[0]).toEqual(ceil(float(0.5)));
});

test("Clamp", () => {
  const ast = testRender(<Clamp x={0.5} min={0.1} max={0.4} />);

  expect(ast[0]).toEqual(clamp(float(0.5), float(0.1), float(0.4)));
});

test("Cos", () => {
  const ast = testRender(<Cos of={0.5} />);

  expect(ast[0]).toEqual(cos(float(0.5)));
});

test("Cross", () => {
  const ast = testRender(<Cross a={<Vec3 x={0.5} />} b={<Vec3 x={0.1} />} />);

  expect(ast[0]).toEqual(cross(vec3(0.5), vec3(0.1)));
});

test("Degrees", () => {
  const ast = testRender(<Degrees radians={Math.PI / 2} />);

  expect(ast[0]).toEqual(degrees(float(Math.PI / 2)));
});

test("Distance", () => {
  const ast = testRender(
    <Distance from={<Vec2 x={0.5} y={0.7} />} to={<Vec2 x={0.4} y={0.7} />} />,
  );

  expect(ast[0]).toEqual(distance(vec2(0.5, 0.7), vec2(0.4, 0.7)));
});

test("Dot", () => {
  const ast = testRender(
    <Dot a={<Vec2 x={0.5} y={0.7} />} b={<Vec2 x={0.4} y={0.7} />} />,
  );

  expect(ast[0]).toEqual(dot(vec2(0.5, 0.7), vec2(0.4, 0.7)));
});

test("Exp", () => {
  const ast = testRender(<Exp a={0.5} />);

  expect(ast[0]).toEqual(exp(float(0.5)));
});

test("Exp2", () => {
  const ast = testRender(<Exp2 a={0.5} />);

  expect(ast[0]).toEqual(exp2(float(0.5)));
});

test("Floor", () => {
  const ast = testRender(<Floor a={0.5} />);

  expect(ast[0]).toEqual(floor(float(0.5)));
});

test("Fract", () => {
  const ast = testRender(<Fract a={0.5} />);

  expect(ast[0]).toEqual(fract(float(0.5)));
});

test("InverseSqrt", () => {
  const ast = testRender(<InverseSqrt a={0.5} />);

  expect(ast[0]).toEqual(inversesqrt(float(0.5)));
});

test("Length", () => {
  const ast = testRender(<Length of={<Vec3 x={0.5} />} />);

  expect(ast[0]).toEqual(length(vec3(0.5)));
});

test("Log", () => {
  const ast = testRender(<Log a={0.5} />);

  expect(ast[0]).toEqual(log(float(0.5)));
});

test("Log2", () => {
  const ast = testRender(<Log2 a={0.5} />);

  expect(ast[0]).toEqual(log2(float(0.5)));
});

test("Max", () => {
  const ast = testRender(<Max a={0.5} b={0.1} />);

  expect(ast[0]).toEqual(max(float(0.5), float(0.1)));
});

test("Min", () => {
  const ast = testRender(<Min a={0.5} b={0.1} />);

  expect(ast[0]).toEqual(min(float(0.5), float(0.1)));
});

test("Mix", () => {
  const ast = testRender(<Mix a={0.5} b={0.1} c={0.2} />);

  expect(ast[0]).toEqual(mix(float(0.5), float(0.1), float(0.2)));
});

test("Mod", () => {
  const ast = testRender(<Mod a={0.5} b={0.1} />);

  expect(ast[0]).toEqual(mod(float(0.5), float(0.1)));
});

test("Normalize", () => {
  const ast = testRender(<Normalize value={<Vec2 value={[0.1, 0.2]} />} />);

  expect(ast[0]).toEqual(normalize(vec2(0.1, 0.2)));
});

test("Pow", () => {
  const ast = testRender(<Pow a={0.5} b={0.6} />);

  expect(ast[0]).toEqual(pow(float(0.5), float(0.6)));
});

test("Radians", () => {
  const ast = testRender(<Radians degrees={<Float value={180} />} />);

  expect(ast[0]).toEqual(radians(float(180)));
});

test("Sign", () => {
  const ast = testRender(<Sign a={0.5} />);

  expect(ast[0]).toEqual(sign(float(0.5)));
});

test("Sin", () => {
  const ast = testRender(<Sin of={0.5} />);

  expect(ast[0]).toEqual(sin(float(0.5)));
});

test("Smoothstep", () => {
  const ast = testRender(<SmoothStep a={0.5} b={0.8} x={0.6} />);

  expect(ast[0]).toEqual(smoothstep(float(0.5), float(0.8), float(0.6)));
});

test("Sqrt", () => {
  const ast = testRender(<Sqrt a={0.9} />);

  expect(ast[0]).toEqual(sqrt(float(0.9)));
});

test("Step", () => {
  const ast = testRender(<Step a={0.5} b={0.9} />);

  expect(ast[0]).toEqual(step(float(0.5), float(0.9)));
});

test("Tan", () => {
  const ast = testRender(<Tan of={0.8} />);

  expect(ast[0]).toEqual(tan(float(0.8)));
});
