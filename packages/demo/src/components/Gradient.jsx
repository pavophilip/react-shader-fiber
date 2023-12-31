import { useCoords } from "../providers/ShaderProvider.jsx";
import { Fract, Mix, X } from "@react-shader/stdlib";

const Gradient = ({ children }) => {
  const coords = useCoords();
  return (
    <Mix a={children[0]} b={children[1]} c={<X of={<Fract of={coords} />} />} />
  );
};

export default Gradient;
