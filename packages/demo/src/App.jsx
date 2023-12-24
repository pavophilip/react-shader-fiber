import Circle from "./examples/Circle.jsx";
import { Box } from "@mui/joy";
import Gradient from "./examples/Gradient.jsx";

function App() {
  return (
    <Box
      display={"grid"}
      sx={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Circle />
      <Gradient />
    </Box>
  );
}

export default App;
