import React from "react";
import MMBox from "./MMBox";
import Button from "react-bootstrap/Button";
import NavigableSection from "../../toolComponents/NavigableSection";
import { Link } from "react-router-dom";

function Home() {
  const visibilityController = <MMBox />;

  return (
    <NavigableSection
      pathMustBeExact
      path="/"
      title="home"
      className="home-container"
      visibilityController={visibilityController}
    >
      {/*visibilityController*/}
      <div className="white-line" />
      <Button as={Link} to="/contact" className="get-started">
        {"LET'S GET STARTED"}
      </Button>
    </NavigableSection>
  );
}

export default Home;
