import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <AuthContext.Provider value={{ email, setEmail, pass, setPass }}>
      {children}
    </AuthContext.Provider>
  );
};
