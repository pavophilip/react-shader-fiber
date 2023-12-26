import { FragmentShader } from "@react-shader/fiber";
import { Assign, Input, Main, Output, Vec4, X, Y } from "@react-shader/stdlib";
import { useRef } from "react";

const Gradient = () => {
  const fragColorRef = useRef();
  const vCoordsRef = useRef();

  return (
    <FragmentShader>
      <Output type={"vec4"} id={"fragColor"} ref={fragColorRef} />

      <Input ref={vCoordsRef} type={"vec2"} id={"vCoords"} />

      <Main>
        <Assign to={fragColorRef}>
          <Vec4
            x={0.9}
            y={<Y of={vCoordsRef} />}
            z={<X of={vCoordsRef} />}
            w={1}
          />
        </Assign>
      </Main>
    </FragmentShader>
  );
};

export default Gradient;
