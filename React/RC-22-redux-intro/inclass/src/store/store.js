//import createStore from "redux"=⬇️

import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

//export const store = createStore(counterReducer);

//!Birden fazla reducer olusturamayiz, birden fazla reducer kullanmacaksak reducerlari birlestirmek icin combineReducers metoduna ihtiyacimiiz var⬇️:

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") &&
    composeWithDevTools()
);
