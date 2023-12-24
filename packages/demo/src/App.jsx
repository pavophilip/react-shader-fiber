import { useRef } from "react";
import "./App.css";
import circle from "../lygia/draw/circle.glsl";
import { FragmentShader } from "react-shader-fiber";
import {
  Assign,
  Call,
  Float,
  Output,
  Input,
  Main,
  Vec4,
} from "@react-shader-fiber/stdlib";

function App() {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  return (
    <div>
      <FragmentShader prelude={[circle]}>
        <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

        <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

        <Main>
          <Assign to={fragColorRef}>
            <Vec4
              x={0}
              y={0}
              z={
                <Call fn={"circle"} type={"float"}>
                  {vCoordsRef}
                  <Float value={0.5} />
                </Call>
              }
              w={1}
            />
          </Assign>
        </Main>
      </FragmentShader>
    </div>
  );
}

export default App;
