export const initialForm = {
  name: "",
  subject: "",
  email: "",
  message: ""
};

export const initialState = {
  sent: false
};

/* El state se almacena en el store asociado a los reducers. Las keys con que el state se guarda son
las indicadas en rootReducer cuando se combinó todos los reducers, estando cada key asociada a la 
una parte del state y al reducer que la maneja.

Si hay alguna key en el state que no fue asociada a algún reducer en rootReducer, entonces tira un
error. Cada reducer recibe la porción de state a la que está asociado y es la que actualiza cada
vez que se ejecuta.

En este caso, los campos de la form se guardaron bajo la key "form", bajo la cual se guardó también
el redux-form reducer. Asimismo, la propiedad "sent" de la form se asoció con formSendingReducer
bajo la misma key.*/
