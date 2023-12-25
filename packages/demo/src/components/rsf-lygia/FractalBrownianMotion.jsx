import { Call } from "@react-shader-fiber/stdlib";

const FractalBrownianMotion = ({ children }) => {
  return (
    <Call fn={"fbm"} type={"float"}>
      {children}
    </Call>
  );
};

export default FractalBrownianMotion;
