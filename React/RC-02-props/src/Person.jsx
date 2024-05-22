//import React from 'react'

import Message from "./Message";

const Person = (props) => {
  //   console.log(props);
  const { name, img, phone } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h4>{phone}</h4>
      <Message isim={name} tel={phone} />
    </div>
  );
};

export default Person;
