import { createContext, FC, PropsWithChildren, useContext } from "react";

const FragmentShaderContext = createContext(null);

export const useFragmentShaderContext = () => {
  return useContext(FragmentShaderContext);
};

const FragmentShaderProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FragmentShaderContext.Provider value={null}>
      {children}
    </FragmentShaderContext.Provider>
  );
};

export default FragmentShaderProvider;
