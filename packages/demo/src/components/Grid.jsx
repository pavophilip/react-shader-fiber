import ShaderProvider, {
  useColor,
  useCoords,
  useTime,
} from "../providers/ShaderProvider.jsx";
import { Float, Mul } from "@react-shader/stdlib";

const Grid = ({ size, children }) => {
  const coords = useCoords();
  const time = useTime();
  const color = useColor();

  return (
    <ShaderProvider
      coords={
        <Mul>
          {coords}
          <Float value={size} />
        </Mul>
      }
      color={color}
      time={time}
    >
      {children}
    </ShaderProvider>
  );
};

export default Grid;
