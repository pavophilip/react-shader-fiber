import { createContext, useContext, useState } from "react";

const FragmentShaderContext = createContext({});

export const useFragmentShaderContext = () => {
  return useContext(FragmentShaderContext);
};

const FragmentShaderProvider = ({ children }) => {
  const [fnDefs, setFnDefs] = useState({});

  const defFn = (name, code) => {
    setFnDefs((curr) => ({
      ...curr,
      [name]: code,
    }));
  };

  return (
    <FragmentShaderContext.Provider value={{ defFn, fnDefs }}>
      {children}
    </FragmentShaderContext.Provider>
  );
};

export default FragmentShaderProvider;
