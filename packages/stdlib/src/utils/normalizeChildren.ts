import { ReactNode } from "react";

const normalizeChildren = (children?: ReactNode | ReactNode[]): ReactNode[] => {
  const arr =
    typeof children === "undefined"
      ? []
      : Array.isArray(children)
        ? [...children]
        : [children];

  return arr.reduce<ReactNode[]>((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      return [...acc, ...currentValue];
    }
    return [...acc, currentValue];
  }, []);
};

export default normalizeChildren;
