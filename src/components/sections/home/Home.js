import React from "react";
import MMBox from "./MMBox";
import Button from "react-bootstrap/Button";
import NavigableSection from "../../toolComponents/NavigableSection";

function Home() {
  return (
    <NavigableSection path="/" title="home" className="home-container">
      <div className="white-line" />
      <MMBox />
      <Button className="get-started">{"LET'S GET STARTED"}</Button>
    </NavigableSection>
  );
}

export default Home;
