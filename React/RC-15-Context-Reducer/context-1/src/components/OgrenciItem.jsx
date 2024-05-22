import { useContext } from "react";
import { StudentContext } from "../App";

const OgrenciItem = () => {
  //! 3- ögrenciItem=context consumer: App.js te olusturulan context i burada cagiriyoruz:
  const { students, changeColor } = useContext(StudentContext);
  console.log(students);

  return (
    <div>
      {students.map((i) => {
        return (
          <div style={{ backgroundColor: i.color }} key={i.id}>
            <h3>NAME: {i.name}</h3>
            <h4>EMAİL: {i.email} </h4>
            <h4> AGE: {i.age}</h4>
            Color:{" "}
            <input
              type="text"
              value={i.color}
              onChange={(e) => changeColor(i.id, e.target.value)} //!buradan App.js teki changeColor fonksiyonuna veri gönderiyoruz.
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
