import { ReactNode, createContext, useState } from "react";

type AppProviderProps = {
  children: ReactNode;
};

const defaultContextData = {
  user: null,
  userId: null,
  setUser: () => {},
  selectedRoom: null,
  setSelectedRoom: () => {},
};

const AppContext = createContext(defaultContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<any | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{ user, userId, setUser, selectedRoom, setSelectedRoom }}
    ></AppContext.Provider>
  );
}
