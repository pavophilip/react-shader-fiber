import { expect, test } from "vitest";
import { testRender } from "@react-shader-fiber/renderer";
import { float, input, output, sym, uniform } from "@thi.ng/shader-ast";
import { Input, Output, Sym, Float, Uniform } from "../main.ts";

test("Uniform", () => {
  const ast = testRender(<Uniform type={"float"} id={"u_time"} />);

  expect(ast[0]).toEqual(uniform("float", "u_time"));
});

test("Input", () => {
  const ast = testRender(<Input type={"vec2"} id={"vCoords"} />);

  expect(ast[0]).toEqual(input("vec2", "vCoords"));
});

test("Output", () => {
  const ast = testRender(<Output type={"vec4"} id={"fragColor"} />);

  expect(ast[0]).toEqual(output("vec4", "fragColor"));
});

test("Sym", () => {
  const ast = testRender(
    <Sym id={"variable"} type={"float"}>
      <Float value={0.5} />
    </Sym>,
  );

  expect(ast[0]).toEqual(sym("float", "variable", {}, float(0.5)));
});
