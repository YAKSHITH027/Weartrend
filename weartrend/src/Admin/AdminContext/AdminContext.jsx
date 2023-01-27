import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();
const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || false
  );

  const loginAdmin = (e) => {
    setAdmin(true);
    localStorage.setItem("admin", true);
  };
  const logoutAdmin = () => {
    setAdmin(false);
    localStorage.setItem("admin", false);
  };

  return (
    <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
