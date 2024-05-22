import { createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//! 1- context alani aciyoruz:

export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

  const changeColor = (id, newColor) => {
    setStudents(
      students.map((a) => (a.id === id ? { ...a, color: newColor } : a))
    ); //!fonksiyon ÖgrenciItem'dan gelen e.target value yu newColor olarak karsiliyor. inputta yazili rengi map le dolasarak her bir elemanin (burada (a)) arkaplan rengi olarak set ediyor. color i arkaplan rengi olarak ÖgrenciItemda style ile set ettik.
  };
  return (
    //! 2- bütün projeye gönderilmek üzere ilk Home u, gönderilecek elemanlarla sarmalliyoruz:

    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
