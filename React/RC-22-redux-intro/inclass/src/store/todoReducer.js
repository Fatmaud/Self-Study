const initialState = {
  todoList: [],
};

//?TYPES:
const ADD = "ADD";
const DEL = "DEL";
const CLR = "CLR";
const TGL = "TGL";

//?ACTION CREATORS:
export const addTodo = (payload) => ({ type: ADD, payload }); //parametreya payload verdigimiz icin action kisminda payloadi direkt yaziyrz. Payload i parametre olarak yazmasaydik payload.payload seklinde yazmamiz gerekirdi

export const clearTodo = () => ({ type: CLR });

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      //   return {
      //     ...state,
      //     todoList: [
      //       ...state.todoList,
      //       { text: payload, completed: false, id: new Date().getTime() },
      //     ],
      //   };
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { text: payload, completed: false, id: crypto.randomUUID() }, //Js web API inda gömülü olan random id olusturan bir method.
        ],
      };

    case "CLR":
      return { ...state, todoList: [] };
    default:
      return state;
      break;
  }
};
