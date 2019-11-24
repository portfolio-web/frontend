import * as types from "../actionCreators/actionTypes";
import { initialState } from "../initialState";

function formSendingReducer(state = initialState.sent, action) {
  switch (action.type) {
    case types.SEND_CONTACT_FORM_RESOLVED:
      return action.sent;
    default:
      return state;
  }
}

export default formSendingReducer;
