import BaseElement from "./BaseElement.js";
import { program } from "@thi.ng/shader-ast";

class Program extends BaseElement {
  static propTypes;

  static defaultProps;

  constructor(props) {
    super({});
    this.props = props;
    this.gen = program;
    this.onUpdate = (ast) => {
      this.ast = this.gen(ast);
      props.onUpdate && props.onUpdate(this.gen(ast));
    };
  }

  commitUpdate(...args) {
    super.commitUpdate(...args);
  }

  appendChild(child) {
    this.args = [...this.args, child.ast];
  }
}

export default Program;
