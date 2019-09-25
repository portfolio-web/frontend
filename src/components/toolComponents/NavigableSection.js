import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { Route } from "react-router-dom";
import { Element as Scrollable, scroller } from "react-scroll";
import { scrollType } from "../../others/values";
import VisibilitySensor from "react-visibility-sensor";

function NavigableSection({
  path,
  pathMustBeExact,
  children,
  title,
  visibilityController,
  ...props
}) {
  /* En este componente estamos haciendo tres cosas:
      i) Asignar una ruta o path a cada sección a través de <Route>.
      ii) Hacer scrolleable (es decir, encontrable por el scroller) a la sección con <Scrollable>,
      así como scrollear automáticamente hasta aquí cada vez que el path coincide con la URL. Esto
      es posible gracias al parámetro match que recibe la función pasada como children de <Route>.
      iii) Detectar visibilidad de la sección con <VisibilitySensor> y un visibilityController pasado
      desde cada sección. Luego a través de las props de <Route> (history y location), pushear el 
      path de tal sección hacia la URL.
  */

  const [visible, setVisibility] = useState(false);

  const restOfChildren = children;

  const scrollHere = () => {
    scroller.scrollTo(title, scrollType);
  };

  /* Recibe la history y location del <Route> que envuelve esta sección, y devuelve una función 
  que maneja el estado visible-noVisible de esta sección. Dicho handler (onVisibiltyChange) pushea 
  el path de esta sección si pasa a ser visible, o bien pushea un path nulo si pasa a ser no visible. */
  const getHandler = (history, location) => {
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
    };

    return onVisibilityChange;
  };

  return (
    <Route exact={pathMustBeExact} path={path}>
      {({ match, history, location }) => {
        //Si hay match path-URL y no es visible, se scrollea hasta la sección.
        if (match && !visible) setTimeout(scrollHere, 10);
        const onVisibilityChangeHandler = getHandler(history, location);
        return (
          <Scrollable name={title}>
            <Section title={title} {...props}>
              <VisibilitySensor onChange={onVisibilityChangeHandler}>
                {visibilityController}
              </VisibilitySensor>
              {restOfChildren}
            </Section>
          </Scrollable>
        );
      }}
    </Route>
  );
}

NavigableSection.propTypes = {
  path: PropTypes.string.isRequired,
  pathMustBeExact: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  visibilityController: PropTypes.element.isRequired,
  ...Section.propTypes
};

export default NavigableSection;
