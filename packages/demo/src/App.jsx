import { useRef } from "react";
import "./App.css";
import circle from "../lygia/draw/circle.glsl";
import { FragmentShader } from "react-shader-fiber";
import {
  Assign,
  Call,
  Float,
  FragColor,
  Input,
  Main,
  Vec4,
} from "@react-shader-fiber/stdlib";

function App() {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  const radiusRef = useRef();
  return (
    <FragmentShader prelude={[circle]}>
      <FragColor ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Main>
        <Float ref={radiusRef} value={0.5} />

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
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
}

export default App;
