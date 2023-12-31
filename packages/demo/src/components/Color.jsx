import { Vec4 } from "@react-shader/stdlib";
import hexToRgb from "../utils/hexToRgb.js";
import normalizeColor from "../utils/normalizeColor.js";

const Color = ({ hex }) => {
  const rgb = normalizeColor(hexToRgb(hex));

  return <Vec4 x={rgb.r} y={rgb.g} z={rgb.b} w={1} />;
};

export default Color;
