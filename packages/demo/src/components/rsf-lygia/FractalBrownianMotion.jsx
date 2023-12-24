import { Call } from "@react-shader-fiber/stdlib";

const FractalBrownianMotion = ({ vec }) => {
  return (
    <Call fn={"fbm"} type={"float"}>
      {vec}
    </Call>
  );
};

export default FractalBrownianMotion;
