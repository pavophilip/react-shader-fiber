import { Color } from "../components";
import { useEffect, useState } from "react";

const TestComponent = () => {
  const [state, setState] = useState("#ff0000");
  useEffect(() => {
    setTimeout(() => {
      setState("#af00f0");
    }, 1000);
  }, []);
  return <Color hex={state} />;
};

export default TestComponent;
