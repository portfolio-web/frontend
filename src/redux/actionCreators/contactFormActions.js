import * as types from "./actionTypes";
import axios from "axios";

function sendContactFormResolved(sent) {
  return {
    type: types.SEND_CONTACT_FORM_RESOLVED,
    sent
  };
}

function sendContactForm(contactForm) {
  return function(dispatch) {
    const restoreSendingState = () => {
      //Restores "sent" state to false after a certain time.
      const secondsUntilRestore = 5;
      setTimeout(
        () => dispatch(sendContactFormResolved(false)),
        secondsUntilRestore * 1000
      );
    };

    return axios
      .post("http://localhost:4000/contact", contactForm)
      .then(res => {
        dispatch(sendContactFormResolved(true));
        restoreSendingState();
        console.log(res);
      })
      .catch(() => dispatch(sendContactFormResolved(false)));
  };
}

export default sendContactForm;
