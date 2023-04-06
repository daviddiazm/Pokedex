import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserPovider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('userName'));

  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem('userName', user);
  }

  const removeUser = () => {
    setUser(null);
    localStorage.removeItem('userName')
  }

  const value = { user, saveUser, removeUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}