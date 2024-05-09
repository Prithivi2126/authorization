import React, { createContext, useState } from "react";
export const context = createContext({});
const Authprovider = ({ children }) => {
  const [authValue, setAuthValue] = useState();
  return (
    <div>
      <context.Provider value={{ authValue, setAuthValue }}>
        {children}
      </context.Provider>
    </div>
  );
};

export default Authprovider;
