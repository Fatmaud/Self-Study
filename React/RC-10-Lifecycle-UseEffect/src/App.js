import "./App.css";
import React, { useState } from "react";
// import LifecycleMethods from "./components/LifecycleMethods";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Clock from "./components/Clock";
// import UseEffectAxiosFetch from "./components/UseEffectAxiosFetch";
import UseEffectPractice from "./components/UseEffectPractice";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-danger mb-4" onClick={() => setShow(!show)}>
        SHOW
      </button> */}

      {/* {show && <LifecycleMethods />} */}

      {/* {show && <Clock />} */}
      {/* <UseEffectAxiosFetch /> */}
      <UseEffectPractice />
    </div>
  );
};

export default App;
