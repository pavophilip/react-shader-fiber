import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

export const PreludeContext = createContext<{
  appendPrelude: (prelude: string) => void;
}>({
  appendPrelude: () => {},
});

const PreludeProvider: FC<
  PropsWithChildren<{
    prelude: string[];
    setPrelude: Dispatch<SetStateAction<string[]>>;
  }>
> = ({ prelude, setPrelude, children }) => {
  const appendPrelude = useCallback(
    (newPrelude: string) => {
      if (prelude.indexOf(newPrelude) === -1) {
        setPrelude([...prelude, newPrelude]);
      }
    },
    [prelude, setPrelude],
  );

  const value = useMemo(() => {
    return {
      appendPrelude,
      prelude,
    };
  }, [appendPrelude, prelude]);

  return (
    <PreludeContext.Provider value={value}>{children}</PreludeContext.Provider>
  );
};

export default PreludeProvider;
