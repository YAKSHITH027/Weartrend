import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();
const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  const loginAdmin = (e) => {
    setAdmin(true);
  };
  const logoutAdmin = () => {
    setAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
