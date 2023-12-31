import React, {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import isFloat from "../../utils/isFloat.ts";
import { float } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";
import { Ast } from "@react-shader/renderer";

const useArgs = (args: any[], children: ReactNode) => {
  const argsChildren = args
    .filter((arg: any) => isValidElement(arg))
    .map((arg: any, index: number) =>
      cloneElement(arg, {
        key: `arg_${index}`,
      }),
    );

  const normalizedChildren = normalizeChildren(children);

  const renderChildren = [...normalizedChildren, ...argsChildren];

  const getArgs = (...childrenArgs: any[]) => {
    let childArgIndex = 0;

    return args.map((arg: any) => {
      if (isFloat(arg)) {
        return float(arg);
      }

      if (isValidElement(arg)) {
        return childrenArgs[childArgIndex++];
      }

      return arg;
    });
  };

  return [getArgs, renderChildren];
};
//
// type ReactElementParameters<T> = {
//   [P in keyof Parameters<T>]: React.ReactElement | Parameters<T>[P];
// };

interface BaseProps {
  gen: any;
  args: any[];
  processArgs?: (args: any[]) => any[];
}

export default React.forwardRef(function Base(
  props: PropsWithChildren<BaseProps>,
  ref,
) {
  const [getArgs, renderChildren] = useArgs(props.args, props.children);

  return (
    <Ast
      ref={ref}
      gen={props.gen}
      args={getArgs}
      processArgs={props.processArgs}
    >
      {renderChildren}
    </Ast>
  );
});
