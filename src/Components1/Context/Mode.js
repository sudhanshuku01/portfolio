import { useState, useContext, createContext } from "react";

const ModeContext = createContext();
const ModeProvider = ({ children }) => {
  const [lm, setLm] = useState(true);

  return (
    <ModeContext.Provider value={[lm, setLm]}>
      {children}
    </ModeContext.Provider>
  );
};

// custom hook
const useMode = () => useContext(ModeContext);

export { useMode, ModeProvider };
