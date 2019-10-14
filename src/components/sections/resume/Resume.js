import React from "react";
import NavigableSection from "../../toolComponents/NavigableSection";

function Resume() {
  const visibilityController = <div className="visibility-controller" />;

  return (
    <NavigableSection
      path="/resume"
      title="resume"
      className="resume-container"
      visibilityController={visibilityController}
    >
      {/*visibilityController*/}
      <h1 className="title">{"Resumé Section"}</h1>
      <p className="lorem-ipsum">
        Sunt aute ullamco voluptate ipsum mollit qui Lorem Lorem qui culpa
        reprehenderit esse. Consequat enim adipisicing sunt reprehenderit ut
        dolore exercitation sint adipisicing do est aliqua proident anim. Sint
        in voluptate proident tempor nulla reprehenderit amet culpa aliquip eu
        cupidatat velit laborum. Minim consectetur aliquip laboris irure
        cupidatat occaecat tempor sint eu proident duis. Consectetur aliqua ut
        non aliquip id ipsum elit reprehenderit. Occaecat ipsum aute minim
        tempor exercitation cillum Lorem consequat aliqua voluptate ea. Mollit
        labore elit consequat velit duis et exercitation sit exercitation eu
        nisi nulla. Minim eiusmod ea sint do. Laborum nisi laboris sunt in
        aliquip duis irure laboris laboris Lorem nostrud ad. Dolore officia et
        aute fugiat tempor magna pariatur excepteur aliqua. Laboris ullamco
        dolore occaecat proident ea commodo ipsum. Aute nulla Lorem do et
        reprehenderit ex aliquip ex. Non amet eiusmod Lorem fugiat laboris
        cillum occaecat cupidatat officia nisi aliquip aliqua labore
        reprehenderit. Voluptate do proident non commodo nulla sit cupidatat
        cupidatat fugiat. Mollit ea quis commodo ad officia dolore adipisicing
        deserunt ut id voluptate elit aliquip cillum. Duis est enim aliqua
        nostrud labore reprehenderit in eu laborum anim laborum nisi duis.
        Deserunt ad sunt labore aliquip ad eu sit exercitation aute irure.
        Nostrud amet minim velit minim elit consequat et fugiat velit non amet
        anim. Pariatur ea cupidatat nulla aliqua mollit ea velit sunt officia.
        Aliqua id velit commodo id qui sunt sint aute reprehenderit do anim.
      </p>
    </NavigableSection>
  );
}

export default Resume;
