import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakereducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
