import React, { createContext, useContext, useState, ReactNode } from "react";

interface TrilhaContextType {
  trailId: Trilha[];
  setTrailId: React.Dispatch<React.SetStateAction<Trilha[]>>;
  trilhas: Trilha[];
  setTrilhas: React.Dispatch<React.SetStateAction<Trilha[]>>;
  modules: Trilha[];
  setModules: React.Dispatch<React.SetStateAction<Trilha[]>>;
}

interface Trilha {
  trailId: number;
  nameTrail: string;
  quantModules: number;
  modulo: Modulo;
}

interface Modulo {
  nomeModulo: string;
}

const TrilhaContext = createContext<TrilhaContextType | undefined>(undefined);

interface TrilhaProviderProps {
  children: ReactNode;
}

export const TrilhaProvider = ({ children }: TrilhaProviderProps) => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [modules, setModules] = useState<Trilha[]>([]);
  const [trailId, setTrailId] = useState<Trilha[]>([]);

  console.log(trilhas);

  return (
    <TrilhaContext.Provider
      value={{ trailId, setTrailId, trilhas, setTrilhas, modules, setModules }}
    >
      {children}
    </TrilhaContext.Provider>
  );
};

export function useTrilha() {
  const context = useContext(TrilhaContext);
  if (!context) {
    throw new Error("useTrilha deve ser usado dentro de um TrilhaProvider");
  }
  return context;
}

export default { useTrilha };
