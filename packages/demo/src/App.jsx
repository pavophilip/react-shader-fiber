import Circle from "./examples/Circle.jsx";
import { Box } from "@mui/joy";
import Gradient from "./examples/Gradient.jsx";
import Grid from "./examples/Grid.jsx";

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
      <Grid />
    </Box>
  );
}

export default App;
