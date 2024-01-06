import { Fract, useCoords, Vec4, X, Y } from "@react-shader/fiber";

const Gradient = () => {
  const coords = useCoords();
  return (
    <Vec4
      x={<Fract of={<X of={coords} />} />}
      y={<Fract of={<Y of={coords} />} />}
      z={1.0}
      w={1}
    />
  );
};

export default Gradient;
