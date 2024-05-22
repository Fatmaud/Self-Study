import { useEffect, useState } from "react";

import GosterUsers from "./pages/GosterUsers";
import { UserContext } from "./context/KullaniciContext";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, size) => {
    setUsers(users.map((a) => (a.id === id ? { ...a, width: size } : a)));
  };

  return (
    <UserContext.Provider value={{ users, changeWidth }}>
      <GosterUsers />
    </UserContext.Provider>
  );
};

export default App;
