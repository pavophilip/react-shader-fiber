import renderer from "react-test-renderer";
import { test } from "vitest";
import { FragmentShader } from "../src/main.ts";
import { Assign, Main, Output, Vec4 } from "@react-shader/stdlib";
import { createRef } from "react";

test("Render Shader", () => {
  const color = createRef();

  const test = renderer.create(
    <FragmentShader>
      <Output type={"vec4"} id={"fragColor"} ref={color} />

      <Main>
        <Assign to={color}>
          <Vec4 x={1} y={0} z={0} w={1} />
        </Assign>
      </Main>
    </FragmentShader>,
  );
});
