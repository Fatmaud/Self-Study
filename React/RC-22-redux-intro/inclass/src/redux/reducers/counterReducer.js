//?Stateleri reactta asagidaki gibi tanimliyoruz, ancak redux kullanirken initialState objecti acip, onun icine key-value pair seklinde state/leri listeliyoruz. Syntax farkli!
//const [count,setCount]=useState(0)//react state acma
//const [todos, setTodos]=useState()

const initialState = {
  //redux ta state object seklinde aciliyor.icine stateleri baslangic degerleri ile birlikte tanimliyoruz.
  count: 0,
  //title:""
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 }; //initialState objectini state e esitledik. count initialState in icindeki bir state. dolayisiyla count a artik state.count seklinde erisebiliyoruz.
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      //return { initialState }; //tek state oldugu icin direkt state in ilk halini return edebilir.Ama daha fazla deger oldugunda asagidaki yapiyi kullanmaliyiz:
      return { ...state, count: 0 };
    default:
      return state;
      break;
  }
};

//!action parametresi state in degisecegi durumlari/kosullari belirler. action parametresi bir objecttir, "type" ve "payload" verileri gelir.
//!"type" action türünü belirtir. Reducer in hangi islemleri yapacagini belirlemesini saglar. Büyük harfle yazilir.(ADD_TODO)
//!"payload" action gerceklestiginde state te olacak degisiklikleri tasir. Ayrica,  bir eylemin etkileyeceği durumu tanımlayan verileri içerir.

//?switch-case yapisinda case ler kosulu ifade eder. durdurmak icin return ya da break kullanilir.
//?default if-else blogundaki else e denk gelir. case lerin hicbiri gerceklesmezse default calisir. reducer da yine statei oldugu gibi döndürür.

//? reducer (her case ve default icin) bir state objecti return etmek zorundadir.
