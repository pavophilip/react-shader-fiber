import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
} from "react";

export const PreludeContext = createContext<{
  appendPrelude: (prelude: string) => void;
}>({
  appendPrelude: () => {},
});

const PreludeProvider: FC<
  PropsWithChildren<{
    setPrelude: Dispatch<SetStateAction<string[]>>;
  }>
> = ({ setPrelude, children }) => {
  const appendPrelude = useCallback(
    (prelude: string) => {
      setPrelude((curr: string[]) => {
        return curr.indexOf(prelude) === -1 ? [...curr, prelude] : curr;
      });
    },
    [setPrelude],
  );
  return (
    <PreludeContext.Provider value={{ appendPrelude }}>
      {children}
    </PreludeContext.Provider>
  );
};

export default PreludeProvider;
