const normalizeChildren = (children) => {
  return typeof children === "undefined"
    ? []
    : Array.isArray(children)
      ? [...children]
      : [children];
};

export default normalizeChildren;
