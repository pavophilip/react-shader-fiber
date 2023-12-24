import { expect, test } from "vitest";
import { bool, float, int, ivec3, uint, vec2, vec4 } from "@thi.ng/shader-ast";
import { testRender } from "@react-shader-fiber/renderer";
import {
  Bool,
  Float,
  Int,
  Uint,
  Vec2,
  Vec3,
  Vec4,
  VecTypeEnum,
} from "../main.ts";

test("Bool", () => {
  const ast = testRender(<Bool value={false} />);

  expect(ast[0]).toEqual(bool(false));
});

test("Float", () => {
  const ast = testRender(<Float value={0.1} />);

  expect(ast[0]).toEqual(float(0.1));
});

test("Int", () => {
  const ast = testRender(<Int value={1} />);

  expect(ast[0]).toEqual(int(1));
});

test("UInt", () => {
  const ast = testRender(<Uint value={1} />);

  expect(ast[0]).toEqual(uint(1));
});

test("Vec2 of floats", () => {
  const ast = testRender(<Vec2 x={<Float value={0.5} />} y={0.8} />);

  expect(ast[0]).toEqual(vec2(0.5, 0.8));
});

test("IVec3", () => {
  const ast = testRender(<Vec3 x={0} y={1} z={2} type={VecTypeEnum.ivec} />);

  expect(ast[0]).toEqual(ivec3(0, 1, 2));
});

test("Vec4", () => {
  const ast = testRender(<Vec4 value={[0.1, 0.2, 0.3, 0.4]} />);

  expect(ast[0]).toEqual(vec4(0.1, 0.2, 0.3, 0.4));
});
