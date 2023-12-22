import BaseElement from "./BaseElement.js";

class Test extends BaseElement {
  static propTypes;

  static defaultProps;

  constructor() {
    super({});

    this.onUpdate = (ast) => {
      this.ast = ast;
    };
  }

  commitUpdate(...args) {
    super.commitUpdate(...args);
  }

  appendChild(child) {
    this.args = [...this.args, child.ast];
  }
}

export default Test;
