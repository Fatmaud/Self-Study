import { useState } from "react";

const GorevEkle = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");
  const [dayy, setDayy] = useState("");
  const [display, setDisplay] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    //&yeni objectin id sini dinamik yapmak icin: (her iki yol icin de gerekli)
    const id = Math.ceil(Math.random() * 100) + 6;

    //! 1.yol: (!!!best practice degil: eklenen veriyi kalici kaydedilmiyor, sayfa yenilendiginde eklenen data silinir.
    //yeni gelen task listenin sonuna eklensin diye ...todos u dizinin basina oyduk. en basa eklensin istersek, yeni objecti basa, ...todosu sona eklemeliyiz.

    // setTodos([...todos, { id: id, text: task, day: dayy, isDone: false }]);

    //! 2.yol: (datayi güncelleyip localStorage a gönderme, bu yöntemde eger yeni data güncellemeyi setTodos()direkt icinde yaparsak localStorage a gönderirken, bir reload geriden geliyor ve datayi eksik güncelliyor. )

    // const newTodos = { id: id, text: task, day: dayy, isdone: false };
    //todos=[newTodos, ...todos]
    //setTodos(todos);

    //! 3.yol: yeni eklenen veriyi ilk önce  localStorage a gönderip oradan güncellenmis veriyi cekme---bu yöntem ayni zamanda database de veri güncelleme yöntemi :

    const newTodos = { id: id, text: task, day: dayy, isdone: false };

    localStorage.setItem("tasks", JSON.stringify([...todos, newTodos]));
    setTodos(JSON.parse(localStorage.getItem("tasks")));

    setTask("");
    setDayy("");
  };

  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button
          className="btn"
          style={{ background: display ? "pink" : "purple" }}
          onClick={() => setDisplay(!display)}
        >
          {display ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>

      {display && (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              name="day"
              value={dayy}
              onChange={(e) => setDayy(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-submit  " type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
