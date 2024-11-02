import { createContext, ReactNode, useState } from "react";

interface GlobalContextType {
  loading: boolean;
  setLoading: (arg: boolean) => void;
}
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
