import { ReactNode } from 'react';

const normalizeChildren = (children?: ReactNode | ReactNode[]): ReactNode[] => {
  return typeof children === "undefined"
      ? []
      : Array.isArray(children)
          ? [...children]
          : [children];
};

export default normalizeChildren;
