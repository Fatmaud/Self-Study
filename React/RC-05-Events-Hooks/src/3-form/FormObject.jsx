import { useState } from "react";

const FormObject = () => {
  const [person, setPerson] = useState({
    name: "",
    password: "",
    email: "",
  });

  //?destructuring
  const { name, password, email } = person;

  const handlePerson = (event) => {
    setPerson({ ...person, [event.target.id]: event.target.value });
  };

  const getDatabase = (e) => {
    e.preventDefault();
    alert(`name ${name}
          email:${email}`);

    //input icine yazilan state degerlerini temizleme:
    setPerson({
      name: "",
      password: "",
      email: "",
    });
  };
  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            NAME: <span className="text-danger">{name} </span>
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            onInput={handlePerson}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={handlePerson}
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handlePerson}
            value={email}
            id="email"
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormObject;
