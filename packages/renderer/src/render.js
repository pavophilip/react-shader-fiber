import ReconcilerNew from "./reconciler.js";
import Program from "./elements/Program.js";
import Test from "./elements/Test.js";

const render = (element, onUpdate = () => {}) => {
  const rootElement = new Program({
    onUpdate,
  });

  const root = ReconcilerNew.createContainer(
    rootElement,
    0,
    null,
    false,
    null,
    "react_shader_",
    (_err) => undefined,
    null,
  );

  ReconcilerNew.updateContainer(element, root, null, () => {});

  return rootElement.ast;
};

export const testRender = (element) => {
  const rootElement = new Test();

  const root = ReconcilerNew.createContainer(
    rootElement,
    0,
    null,
    false,
    null,
    "react_shader_",
    (_err) => undefined,
    null,
  );

  ReconcilerNew.updateContainer(element, root, null, () => {});

  return rootElement.ast;
};

export default render;
