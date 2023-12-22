import {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactNode,
  Ref,
} from "react";
import isFloat from "../../utils/isFloat.ts";
import { float } from "@thi.ng/shader-ast";
import normalizeChildren from "../../utils/normalizeChildren.ts";
import { Ast } from "@react-shader-fiber/renderer";

interface BaseProps<T extends (...args: any[]) => any> {
  gen: T;
  args: Parameters<T>;
  processArgs?: (args: Parameters<T>) => Parameters<T>;
  children?: ReactNode;
}

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

const Base = forwardRef(
  <T extends (...args: any[]) => any>(
    { gen, args, processArgs, children }: BaseProps<T>,
    ref: Ref<any>,
  ) => {
    const [getArgs, renderChildren] = useArgs(args, children);
    return (
      <Ast ref={ref} gen={gen} args={getArgs} processArgs={processArgs}>
        {renderChildren}
      </Ast>
    );
  },
);

export default Base;
