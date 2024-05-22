import React, { useContext } from "react";

import AnaUser from "./AnaUser";

import { UserContext } from "../context/KullaniciContext";

const Isimler = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {/* diziden 4 kişinin ismini bastir */}
      {users.slice(0, 4).map((i) => (
        <div style={{ textAlign: "center", background: "pink" }}>{i.login}</div>
      ))}
      <AnaUser />
    </div>
    //!useContext le parenta cagirdigimiz bilgiyi, childina props ile gönderebilirz. (AnaUser Isimlerin childi.) //! AnaUser a gidip useContext ile de ayni bilgiyyi cagirabilliriz.
  );
};

export default Isimler;
