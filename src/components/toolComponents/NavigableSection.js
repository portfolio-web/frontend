import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { Route } from "react-router-dom";
import { Element as Scrollable, scroller } from "react-scroll";
import { scrollType } from "../../others/values";
import VisibilitySensor from "react-visibility-sensor";

/* Usamos Route con la prop children (pasada entre etiquetas <Route> <Route/>) para renderizar
todos los componentes aún si la URL no corresponde con el path especificado.
¿Por qué usar esto y no simplemente ubicar todos los componentes solos? Esto permite
ejecutar acciones o modificar un componente cuando su path coincide (match) o no con la URL,
en tiempo real. */

function NavigableSection({
  path,
  pathMustBeExact,
  children,
  sectionName,
  ...props
}) {
  /* En este componente estamos haciendo tres cosas:
      i) Asignar una ruta o path a cada sección a través de <Route>.
      ii) Hacer scrolleable (es decir, encontrable por el scroller) a la sección con <Scrollable>,
      así como scrollear automáticamente hasta aquí cada vez que el path coincide con la URL. Esto
      es posible gracias al parámetro match que recibe la función pasada a children de <Route>.
      iii) Detectar visibilidad de la sección con <VisibilitySensor> y, a través de las props de 
      <Route> (history y location), pushear el path de tal sección hacia la URL. 
  */

  const [visible, setVisibility] = useState(false);

  /* Scrollea hasta esta sección. La identifica usando el mismo nombre que se pasó en
  <Scrollable name={sectionName}> </Scrollable> */
  const scrollHere = () => {
    scroller.scrollTo(sectionName, scrollType);
  };

  /* Si hay match y no es visible, entonces ejecuta scrollHere.*/
  const tryScrollHere = pathMatch => {
    if (pathMatch && !visible) {
      setTimeout(scrollHere, 10);
    }
  };

  /* Recibe la history y location del <Route> que envuelve esta sección, y devuelve una función 
  que maneja el estado visible-noVisible de esta sección. Dicho handler (onVisibiltyChange) pushea 
  el path de esta sección si es visible, o no hace nada de lo contrario. */
  const getOnVisibilityChangeHandler = (history, location) => {
    const onVisibilityChange = isVisible => {
      if (!visible && isVisible) {
        //Si no era visible y pasó a ser visible...
        setVisibility(true);
        history.push(path, location.state);
      } else if (visible && !isVisible) {
        //Si era visible y pasó a ser no visible...
        history.push("/--", location.state);
        setVisibility(false);
      }
      /* Con esta forma evitamos que se repita visibilidad si ya es visible*/
    };

    return onVisibilityChange;
  };

  return (
    <Route exact={pathMustBeExact} path={path}>
      {({ match, history, location }) => (
        <>
          <VisibilitySensor
            onChange={getOnVisibilityChangeHandler(history, location)}
          >
            <Scrollable name={sectionName}>
              <Section title={sectionName} {...props}>
                {children}
              </Section>
            </Scrollable>
          </VisibilitySensor>
          {tryScrollHere(match)}
        </>
      )}
    </Route>
  );
}

NavigableSection.propTypes = {
  path: PropTypes.string.isRequired,
  pathMustBeExact: PropTypes.bool,
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default NavigableSection;
