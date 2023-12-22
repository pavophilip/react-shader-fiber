class BaseElement {
  static defaultProps = {};
  static propTypes = {};

  constructor(props = {}) {
    this.props = this.getProps(props);
    this.children = [];
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    // implementation needed
  }

  commitMount() {
    // implementation needed
    return undefined;
  }

  commitUpdate(newProps) {
    this.props = {
      ...this.props,
      ...newProps,
    };
  }

  getProps(props) {
    return props;
  }
}

export default BaseElement;
