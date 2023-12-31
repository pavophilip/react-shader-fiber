import StepOne from "./examples/StepOne.jsx";
import { Box } from "@mui/joy";
import Gradient from "./examples/Gradient.jsx";
import Grid from "./examples/Grid.jsx";
import StepTwo from "./examples/StepTwo.jsx";
import StepThree from "./examples/StepThree.jsx";

function App() {
  return (
    <Box
      display={"grid"}
      sx={{
        p: 4,
        gap: 4,
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
      <Gradient />
      <Grid />
      {/*<Landscape />*/}
    </Box>
  );
}

export default App;
