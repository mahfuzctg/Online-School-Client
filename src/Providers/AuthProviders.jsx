import React, { createContext } from "react";

export const AuthContext = createContext(null);
const authInfo = {};
const AuthProviders = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
