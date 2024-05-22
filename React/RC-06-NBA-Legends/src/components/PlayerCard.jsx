import { useState } from "react";
import { Card, CardFooter } from "react-bootstrap";

const PlayerCard = ({ img, name, statistics }) => {
  //data objectini parent componentte (...)spread ile destr. yapip buraya gönderdigimiz icin, props kisminda dest. yapabildik. Gelen data object oldugunda spread ile bu sekilde dest. yapabiliriz.

  const [showImage, setShowImage] = useState(true);

  return (
    <Card
      className="player-card m-auto"
      onClick={() => setShowImage(!showImage)}
    >
      {showImage ? (
        <Card.Img className="player-logo" variant="top" src={img} />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => (
            <li key={i} className="h5 text-start list-unstyled">
              {i === 0 ? "🏀" : i === 1 ? "👌" : i === 2 ? "🤗" : "🏅"} {item}
            </li>
          ))}
        </ul>
      )}

      <CardFooter>
        <Card.Title> {name}</Card.Title>
      </CardFooter>
    </Card>
  );
};

export default PlayerCard;
