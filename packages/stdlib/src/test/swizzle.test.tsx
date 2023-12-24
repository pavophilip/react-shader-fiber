import { expect, test } from "vitest";
import { testRender } from "@react-shader-fiber/renderer";
import {
  $w,
  $x,
  $xy,
  $xyz,
  $y,
  $z,
  vec2,
  vec3,
  vec4,
} from "@thi.ng/shader-ast";
import { Vec2, Vec3, Vec4, W, X, XY, XYZ, Y, Z } from "../main.ts";

test("X", () => {
  const ast = testRender(<X of={<Vec2 x={0.2} y={0.1} />} />);
  expect(ast).toEqual(
    testRender(
      <X>
        <Vec2 x={0.2} y={0.1} />
      </X>,
    ),
  );
  expect(ast[0]).toEqual($x(vec2(0.2, 0.1)));
});

test("Y", () => {
  const ast = testRender(<Y of={<Vec2 x={0.2} y={0.1} />} />);

  expect(ast[0]).toEqual($y(vec2(0.2, 0.1)));
});

test("Z", () => {
  const ast = testRender(<Z of={<Vec3 x={0.2} y={0.1} z={0.5} />} />);

  expect(ast[0]).toEqual($z(vec3(0.2, 0.1, 0.5)));
});

test("W", () => {
  const ast = testRender(<W of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} />);

  expect(ast[0]).toEqual($w(vec4(0.2, 0.1, 0.5, 1.0)));
});

test("XY", () => {
  const ast = testRender(<XY of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} />);

  expect(ast[0]).toEqual($xy(vec4(0.2, 0.1, 0.5, 1.0)));
});

test("XYZ", () => {
  const ast = testRender(<XYZ of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} />);

  expect(ast[0]).toEqual($xyz(vec4(0.2, 0.1, 0.5, 1.0)));
});
