const isRef = (obj) => {
  return typeof obj === "object" && obj.hasOwn("current");
};

export default isRef;
