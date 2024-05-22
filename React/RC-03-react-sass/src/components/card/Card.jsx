import "./Card.scss";

const Card = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="containerS">
      {cardData.map(({ name, job, comment, img, id }) => {
        return (
          <div className="cardS" key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} />
            <div className="btn-div">
              <button className="btn-div--small">Small</button>
              <button className="btn-div--large">Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
