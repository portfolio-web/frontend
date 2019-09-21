import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import Route from "react-router-dom/Route";
import { Element as Scrollable, scroller } from "react-scroll";
import { scrollType } from "../../others/values";

/* Usamos Route con la prop children (pasada entre etiquetas <Route> <Route/>) para renderizar
todos los componentes aún si la URL no corresponde con el path especificado.
¿Por qué usar esto y no simplemente ubicar todos los componentes solos? Esto permite
ejecutar acciones o modificar un componente cuando su path coincide (match) o no con la URL,
en tiempo real. */

function NavigableSection({ path, children, ...props }) {
  // eslint-disable-next-line react/no-children-prop
  return (
    <Route path={path}>
      {({ match }) => {
        if (match) scroller.scrollTo(props.title, scrollType);

        return (
          <Scrollable name={props.title}>
            {<Section {...props}>{children}</Section>}
          </Scrollable>
        );
      }}
    </Route>
  );
}

NavigableSection.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default NavigableSection;
