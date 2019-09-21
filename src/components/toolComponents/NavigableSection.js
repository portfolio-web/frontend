import React from "react";
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

  return (
    <Route exact={pathMustBeExact} path={path}>
      {({ match, history, location }) => {
        var pathPushedByVisibility = false;

        const onChange = isVisible => {
          if (isVisible) {
            history.push(path, location.state);
            pathPushedByVisibility = true;
          }
        };

        const scrollHere = () => {
          scroller.scrollTo(sectionName, scrollType);
          pathPushedByVisibility = false;
        };

        return (
          <VisibilitySensor onChange={onChange}>
            <Scrollable name={sectionName}>
              <Section title={sectionName} {...props}>
                {children}
              </Section>
              {match && !pathPushedByVisibility && setTimeout(scrollHere, 0)}
            </Scrollable>
          </VisibilitySensor>
        );
      }}
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
