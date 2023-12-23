const getVectorValue = <T>(x: T, y?: T, z?: T, w?: T) => {
  return [x, y, z, w].reduce<T[]>((acc, v) => {
    if (typeof v === "undefined") return acc;

    return [...acc, v];
  }, []);
};
export default getVectorValue;
