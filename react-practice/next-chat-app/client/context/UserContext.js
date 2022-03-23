import { createContext, useContext, useState } from "react";

const initialState = {
  name: "",
  roomId: "",
};
export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <UserContext.Provider value={{ name, setName, roomId, setRoomId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
