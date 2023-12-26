import { Call, Float } from "@react-shader/stdlib";

const Stroke = ({ x, size, width }) => {
  return (
    <Call fn={"stroke"} type={"float"}>
      {x}
      <Float value={size} />
      <Float value={width} />
    </Call>
  );
};

export default Stroke;
