const normalizeColor = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return { r: r / 255, g: g / 255, b: b / 255 };
};

export default normalizeColor;
