import React, { useState, useEffect } from "react";
import Main from "./NotFoundStyle";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      // Her saniyede bir, count değerini azalt
      setCount((prevCount) => (prevCount === 0 ? prevCount : prevCount - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    return <Navigate to="/home" />;
  }

  return (
    <Main>
      <div>
        <h3>Oops! Something went wrong😒</h3>
        <p>
          You'll be redirected to the home page within{" "}
          <strong> {count} </strong>
          seconds.
        </p>
      </div>
    </Main>
  );
};

export default NotFound;
