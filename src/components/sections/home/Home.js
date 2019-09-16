import React from "react";
import MMBox from "./MMBox";
import Button from "react-bootstrap/Button";
import Section from "../Section";

function Home() {
  return (
    <Section title="home" className="home-container">
      <div className="white-line" />
      <MMBox />
      <Button className="get-started">{"LET'S GET STARTED"}</Button>
    </Section>
  );
}

export default Home;
