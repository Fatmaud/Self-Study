import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({ todos, setTodos }) => {
  //!deleteTodo fonksiyonuna asagidan h3 ün icindeki x isaretine click olayindan id gönderdik. "todo.id" yi "rmv" ile karsiladik, o yüzden rmv .id degil rmv yazdik.

  const deleteTodo = (rmv) => {
    //! 1.yol: Hem ekrandan hem LS tan silme:

    // todos = todos.filter((i) => i.id !== rmv);
    // setTodos(todos);
    // localStorage.setItem("tasks", JSON.stringify(todos));

    //! 2. yol: (database style:) önce LS a gönderip güncel listeyi LS dan cekme:

    localStorage.setItem(
      "tasks",
      JSON.stringify(todos.filter((i) => i.id !== rmv))
    );
    setTodos(JSON.parse(localStorage.getItem("tasks")));
  };

  const styleStorage = (todo) => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        setTodos(
          todos.map((a) => (a.id === todo.id ? { ...a, isDone: !a.isDone } : a))
        )
      )
    );

    setTodos(JSON.parse(localStorage.getItem("tasks")));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            className={todo.isDone ? "done" : "gorev"}
            onDoubleClick={() => styleStorage(todo)}
          >
            <h3>
              {todo.text} <FaTimesCircle onClick={() => deleteTodo(todo.id)} />{" "}
            </h3>
            <h6>{todo.day} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
