import "./App.css";
import Counter from "./components/counter/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import Todo from "./components/todo/Todo";

import { legacy_createStore as createStore } from "redux";
import { store } from "./store/store";
import { Provider } from "react-redux"; //react-component alanindayiz (=App.js componenti).o yüzden direkt redux tan import edemeyiz. react-redux dan import ediyoruz.

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        {/* store.js alaninda create ettigimiz store */}
        <ErrorBoundary>
          {/* <Counter /> */}
          <Todo />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
