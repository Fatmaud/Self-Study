import React from "react";
//import "./Main.scss";
const Card = ({ title, date, image, desc, id }) => {
  return (
    <div className="cards " key={id}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="date">
        <h1>{date}</h1>
      </div>
      <img src={image} alt="" />
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
