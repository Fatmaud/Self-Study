import React, { useContext } from "react";
import { UserContext } from "../context/KullaniciContext";

const AnaUser = () => {
  const { users } = useContext(UserContext);
  const { changeWidth } = useContext(UserContext);

  return (
    <div>
      {users.map((i) => {
        return (
          <div>
            <h3>{i.login} </h3>
            <img src={i.avatar_url} alt="" width={i.width} />

            <div>
              <label htmlFor="">Image width(px)</label>
              <input
                type="number"
                onChange={(e) => changeWidth(i.id, e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
