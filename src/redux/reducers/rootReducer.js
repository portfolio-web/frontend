import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import formSendingReducer from "./formSendingReducer";

const rootReducer = combineReducers({
  sent: formSendingReducer,
  form: formReducer
});

export default rootReducer;
