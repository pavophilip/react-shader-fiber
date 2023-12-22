import Reconciler from "./reconciler.js";
import Program from "./elements/Program.js";
import Test from "./elements/Test.js";

const render = (element, onUpdate) => {
  const rootElement = new Program({ onUpdate });

  const root = Reconciler.createContainer(
    rootElement,
    0,
    null,
    false,
    null,
    "react_shader_",
    (_err) => undefined,
    null,
  );

  Reconciler.updateContainer(element, root, null, () => {});

  return rootElement.ast;
};

export const testRender = (element) => {
  const rootElement = new Test();

  const root = Reconciler.createContainer(
    rootElement,
    0,
    null,
    false,
    null,
    "react_shader_",
    (_err) => undefined,
    null,
  );

  Reconciler.updateContainer(element, root, null, () => {});

  return rootElement.ast;
};

export default render;
