//import React from "react";

const Message = ({ isim, tel }) => {
  //   console.log(props);

  //   const { isim, tel } = props;
  return (
    <div>
      <h4 style={{ color: "green" }}>
        Merhaba ben {isim}, telefon numaram {tel}.
      </h4>
    </div>
  );
};

export default Message;
