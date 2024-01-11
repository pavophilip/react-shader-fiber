import { useContext, useEffect } from "react";
import { PreludeContext } from "../providers/PreludeProvider.tsx";

const usePrelude = (str: string) => {
  const { appendPrelude } = useContext(PreludeContext);

  useEffect(() => {
    appendPrelude(str);
  }, [str]);
};

export default usePrelude;
