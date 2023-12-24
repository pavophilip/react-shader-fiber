import Circle from "./examples/Circle.jsx";
import { Box, Sheet } from "@mui/joy";

function App() {
  return (
    <Box
      display={"grid"}
      sx={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Box>
  );
}

export default App;
