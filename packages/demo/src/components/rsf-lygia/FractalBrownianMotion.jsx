import { Call } from "@react-shader/stdlib";

const FractalBrownianMotion = ({ children }) => {
  return (
    <Call fn={"fbm"} type={"float"}>
      {children}
    </Call>
  );
};

export default FractalBrownianMotion;
