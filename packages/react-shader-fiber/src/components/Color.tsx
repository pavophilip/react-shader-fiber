import { Vec4 } from "@react-shader/stdlib";
import { FC, useMemo } from "react";
import normalizeColor from "../utils/normalizeColor.ts";
import hexToRgb from "../utils/hexToRgb.ts";

type HexColorProps = {
  hex: string;
  r?: never;
  g?: never;
  b?: never;
  a?: number;
};

type RGBColorProps = {
  hex?: never;
  r: number;
  g: number;
  b: number;
  a?: number;
};

const Color: FC<HexColorProps | RGBColorProps> = ({ hex, r, g, b, a = 1 }) => {
  const { x, y, z } = useMemo(() => {
    if (typeof hex === "undefined") {
      return {
        x: r,
        y: g,
        z: b,
      };
    }

    const color = hexToRgb(hex);

    if (!color) {
      throw new Error("Invalid color");
    }
    const { r: x, g: y, b: z } = normalizeColor(color);

    return { x, y, z };
  }, [b, g, hex, r]);

  return <Vec4 x={x} y={y} z={z} w={a} />;
};

export default Color;
