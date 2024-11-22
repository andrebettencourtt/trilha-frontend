import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoginContextType {
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;

  nameUser: string;
  setNameUser: React.Dispatch<React.SetStateAction<string>>;

  lastNameUser: string;
  setLastNameUser: React.Dispatch<React.SetStateAction<string>>;
}

/* interface Login {
  userId: number;
  nameUser: string;
  lastNameUser: string;
  emailUser: string;
} */

const LoginContext = createContext<LoginContextType | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: LoginProviderProps) => {
  const [nameUser, setNameUser] = useState<string>("");
  const [lastNameUser, setLastNameUser] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  /* console.log(login); */

  return (
    <LoginContext.Provider
      value={{
        nameUser,
        setNameUser,
        lastNameUser,
        setLastNameUser,
        userId,
        setUserId,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useTrilha deve ser usado dentro de um TrilhaProvider");
  }
  return context;
}

export default { useLogin };
