import thunk from "redux-thunk";
import dataReducer from "./dataReducer";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(dataReducer, applyMiddleware(thunk));
