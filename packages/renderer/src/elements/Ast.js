import BaseElement from "./BaseElement.js";

const getArgs = (args, children = []) => {
  const result = typeof args === "function" ? args(...children) : args;

  return result.map((arg) => {
    return typeof arg === "object" && Object.hasOwn(arg, "current")
      ? arg?.current?.ast
      : arg;
  });
};

class Ast extends BaseElement {
  static propTypes;

  static defaultProps;

  constructor(props) {
    super(props);

    if (props.processArgs) {
      this.processArgs = props.processArgs;
    }

    this.gen = props.gen;
    this.args = this.processArgs(getArgs(props.args));
    this.children = [];

    try {
      this.ast = this.gen(...this.args);
    } catch (e) {
      this.error = e;
    }
  }

  processArgs(args) {
    return args;
  }

  appendChild(child) {
    this.children = [...this.children, child.ast];

    if (this.props.gen && this.props.args) {
      if (typeof this.props.args === "function") {
        this.args = this.processArgs(getArgs(this.props.args, this.children));

        try {
          this.ast = this.gen(...this.args);
        } catch (e) {
          this.error = e;
        }
      }
    }
  }
}

export default Ast;
