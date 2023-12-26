import { testRender } from "@react-shader/renderer";
import { expect, test } from "vitest";
import { Assign, Call, Main, Output, Vec4 } from "../main.ts";
import { funcall } from "@thi.ng/shader-ast/ast/function";
import { assign, defMain, float, output, vec4 } from "@thi.ng/shader-ast";
import Float from "../components/lit/Float.tsx";

test("Call function", () => {
  const ast = testRender(
    <Call fn={"circle"} type={"float"}>
      <Float value={0.5} />
    </Call>,
  );

  expect(ast[0]).toEqual(funcall("circle", "float", float(0.5)));
});

test("Main", () => {
  const ast = testRender(
    <Main>
      <Assign to={<Output type={"vec4"} id={"fragColor"} />}>
        <Vec4 x={0} y={0} z={1} w={1} />
      </Assign>
    </Main>,
  );

  expect(ast[0].scope).toEqual(
    defMain(() => [assign(output("vec4", "fragColor"), vec4(0, 0, 1, 1))])
      .scope,
  );
});
