import ShaderProvider, {
  useColor,
  useCoords,
  useTime,
} from "../providers/ShaderProvider.jsx";
import { Add, Float, Mul } from "@react-shader/stdlib";

const Animate = ({ speed, children }) => {
  const coords = useCoords();
  const time = useTime();
  const color = useColor();

  return (
    <ShaderProvider
      coords={
        <Add>
          {coords}
          <Mul>
            <Float value={time} />
            <Float value={speed} />
          </Mul>
        </Add>
      }
      color={color}
      time={time}
    >
      {children}
    </ShaderProvider>
  );
};

export default Animate;
