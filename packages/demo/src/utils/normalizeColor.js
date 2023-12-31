const normalizeColor = ({ r, g, b }) => {
  return { r: r / 255, g: g / 255, b: b / 255 };
};

export default normalizeColor;
