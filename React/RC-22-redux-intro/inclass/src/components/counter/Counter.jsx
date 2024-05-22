import {
  decrement,
  increment,
  reset,
} from "../../redux/actions/counterActions";
//import { INC } from "../../redux/types/counterTypes";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //!useSelector  ile redux consume asamasi:

  //useSelector{state=>state.reducer}

  //?combineReducers sonucu bu konsume sekli hatali oldu. Artik asagidaki sekilde state in key ine ulasabiliriz:
  //const count = useSelector((state) => state.count);
  //const {count}= useSelector(state=>state)//üstteki ifade ile bu ifade ayni. Burada state callback functionla state i döndürdü ve count süslü icine alinarak destructure edildi.

  const count = useSelector((state) => state.counter.count); // (store.js te) reducerlari birlestirince artik direkt countu cagiramiyoruz. orada tanimladigimiz counter üzerinden count a erisebiliriz.

  const dispatch = useDispatch();
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter: {count}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch("INC")} //! action obje olmak zorunda o nedenle argüman gönderirken obje olarak göndermek zorundayız. Bu şekilde hata alırız.
          // onClick={() => dispatch({ tip: "INC" })}//? obje içerisinde gönderdiğimiz property type adında olmalı
          //onClick={() => dispatch({ type: "inc" })} //* dispatch içerisinde verdiğimiz argüman reducer içerisindeki action parametresine karşılık gelir.
          //onClick={() => dispatch({ type: INC })}---counterTypes dosyasinda olusturulan action listesini kullandik
          onClick={() => dispatch(increment())} //----counterActions dosyasinda olusturdugumuz type fonsiyonlarini cagirarak action lari kullandik.
        >
          increase
        </button>

        <button
          className="counter-button negative"
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>

        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

//type property si string seklinde yaziliyor, bu sekilde case sensitivity hata olasiligini artirioyr. bu nedenle redux klasörü altinda types adinda bir klasör acip, ilgili bir dosyada type lari export ile tanimlayabiliriz.
