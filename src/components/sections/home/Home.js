import React from "react";
import MMBox from "./MMBox";
import Button from "react-bootstrap/Button";
import NavigableSection from "../../toolComponents/NavigableSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <NavigableSection
      pathMustBeExact
      path="/"
      sectionName="home"
      className="home-container"
    >
      <div className="white-line" />
      <MMBox />
      <Button as={Link} to="/contact" className="get-started">
        {"LET'S GET STARTED"}
      </Button>
    </NavigableSection>
  );
}

export default Home;
